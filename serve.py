"""Static server that emulates Next.js /_next/image by serving the underlying file."""
import http.server
import socketserver
import urllib.parse
from pathlib import Path

PORT = 3000
ROOT = Path(__file__).parent


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/_next/image":
            qs = urllib.parse.parse_qs(parsed.query)
            src = qs.get("url", [None])[0]
            if src:
                src = urllib.parse.unquote(src)
                if src.startswith("/"):
                    self.path = src
                    return super().do_GET()
            self.send_error(400, "Missing or invalid url param")
            return
        return super().do_GET()


if __name__ == "__main__":
    with socketserver.ThreadingTCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{PORT}/")
        httpd.serve_forever()
