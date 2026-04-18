import html as html_mod
import os
import re
import urllib.parse
import urllib.request
from pathlib import Path

BASE = "https://arieltech.neomac.io"
ROOT = Path(__file__).parent
visited = set()

HEADERS = {"User-Agent": "Mozilla/5.0 (site-mirror)"}


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read(), r.headers.get("Content-Type", "")


def save(rel_path, data):
    out = ROOT / rel_path.lstrip("/")
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "wb") as f:
        f.write(data)


def url_to_local(url):
    if url.startswith(BASE):
        url = url[len(BASE):]
    if not url.startswith("/"):
        return None
    parsed = urllib.parse.urlparse(url)
    path = parsed.path
    query = parsed.query
    if path == "/_next/image" and query:
        qs = urllib.parse.parse_qs(query)
        real = qs.get("url", [None])[0]
        if real:
            return urllib.parse.unquote(real)
    return path


def enqueue(urls, queue, seen):
    for u in urls:
        if not u:
            continue
        u = html_mod.unescape(u.strip().strip('"').strip("'"))
        if u.startswith("//"):
            u = "https:" + u
        if u.startswith("/") and not u.startswith("//"):
            u = BASE + u
        if not u.startswith(BASE):
            continue
        local = url_to_local(u)
        if not local:
            continue
        fetch_url = BASE + local if "/_next/image" in u else u
        if local in seen:
            continue
        seen.add(local)
        queue.append((fetch_url, local))


def extract_from_html(html):
    urls = []
    urls += re.findall(r'(?:href|src)="([^"]+)"', html)
    for m in re.findall(r'(?:srcSet|imageSrcSet|srcset)="([^"]+)"', html):
        for part in m.split(","):
            bits = part.strip().split(" ")
            if bits:
                urls.append(bits[0])
    return urls


def extract_from_css(css):
    return re.findall(r'url\(\s*["\']?([^"\')\s]+)', css)


def main():
    seen = set(["/"])
    queue = [(BASE + "/", "/index.html")]

    fetched_count = 0
    while queue:
        url, local = queue.pop(0)
        try:
            data, ctype = fetch(url)
        except Exception as e:
            print(f"FAIL {url}: {e}")
            continue
        save(local, data)
        fetched_count += 1
        print(f"[{fetched_count}] {local} ({len(data)} bytes, {ctype.split(';')[0]})")

        lower_ct = ctype.lower()
        if "html" in lower_ct or local.endswith(".html"):
            text = data.decode("utf-8", errors="ignore")
            enqueue(extract_from_html(text), queue, seen)
        elif "css" in lower_ct or local.endswith(".css"):
            text = data.decode("utf-8", errors="ignore")
            enqueue(extract_from_css(text), queue, seen)
        elif "javascript" in lower_ct or local.endswith(".js"):
            text = data.decode("utf-8", errors="ignore")
            js_refs = re.findall(r'["\'](/(?:_next|images|fonts)[^"\'?\s)]+)["\']', text)
            enqueue(js_refs, queue, seen)

    idx = ROOT / "index.html"
    if idx.exists():
        html = idx.read_text(encoding="utf-8")

        def rewrite_next_image(m):
            full = m.group(0)
            q = m.group(1)
            qs = urllib.parse.parse_qs(q)
            real = qs.get("url", [None])[0]
            if real:
                return urllib.parse.unquote(real)
            return full

        html = re.sub(r'/_next/image\?([^"\'\s)]+)', rewrite_next_image, html)
        idx.write_text(html, encoding="utf-8")
    print(f"\nDone. {fetched_count} files.")


if __name__ == "__main__":
    main()
