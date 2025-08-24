const http = require('http');


const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    
    if (req.url === '/') {
        res.end(JSON.stringify({ message: 'Welcome to the Node.js Server!' }));
    } else if (req.url === '/api/hello') {
        res.end(JSON.stringify({ message: 'Hello, World!' }));
    } else if (req.url === '/api/students') {
       
        const students = [
            { id: 1, name: 'Aanya Singh', grade: 85 },
            { id: 2, name: 'Vedant Ambh', grade: 92 },
            { id: 3, name: 'Ram', grade: 78 }
        ];
        res.end(JSON.stringify(students));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

