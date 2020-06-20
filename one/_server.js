const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000
app.get('/', (request, response) => {
    fs.readFile("inform.html", function (error, pgResp) {
        if (error) {
            //response.writeHead(404);
            console.log(error)
            response.write('Contents you are looking are Not Found');
        } else {
            //response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(pgResp);
        }
        response.end();
    });
//response.send('Hello from Express!')
})
app.use(express.static('static'));
app.use(express.static('versioned'));
app.use(express.static('zkau'));
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})