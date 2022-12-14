http = require('http');

console.log('1. Hola');

http.get('http://httpstat.us/200', (res) => {
    console.log(`2. La API devolvió ${res.statusCode}`);
});

console.log('3. Adios');