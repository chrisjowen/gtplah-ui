var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
})

var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started ' + port);
