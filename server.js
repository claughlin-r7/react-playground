var path = require('path');
var express = require('express');
var app = express();
var publicPath = __dirname + '/public';
var mockDataPath = __dirname + '/mock_data/';
app.use(express.static(publicPath));

app.get('*', function (request, response){
    if (request.url.indexOf('api/1/') != -1) {
        response.sendFile(mockDataPath + request.url + '.json');
    } else {
        response.sendFile(path.resolve(publicPath, 'index.html'))
    }
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application Running on http://%s:%s', host, port);
});

