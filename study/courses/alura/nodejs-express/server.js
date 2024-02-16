import http from 'http';

const port = 8000;

const routes = {
    "/": "Curso de NODEJS"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log('Server online: ', port);
});


