const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT) || 3000;
const buildDir = path.join(__dirname, 'build');
const indexFile = path.join(buildDir, 'index.html');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

function sendFile(filePath, response) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType =
      contentTypes[extension] || 'application/octet-stream';

    response.writeHead(200, { 'Content-Type': contentType });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const normalizedPath =
    requestPath === '/'
      ? indexFile
      : path.join(buildDir, requestPath.replace(/^\/+/, ''));

  if (!normalizedPath.startsWith(buildDir)) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  fs.stat(normalizedPath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(normalizedPath, response);
      return;
    }

    sendFile(indexFile, response);
  });
});

server.listen(port, () => {
  // Intentionally minimal log so detached launches stay readable.
  console.log(`Static server running on http://localhost:${port}`);
});
