var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text({ type:'*/*'}))

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(process.env.PORT || 8008, function() {
    console.log('Listening on port %d', this.address().port);
})

module.exports = app;