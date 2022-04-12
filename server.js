const express = require('express');
const app = express();

const certbotId = ''

app.get('/.well-known/acme-challenge/:id', function(req, res, next) {
    res.send(req.params.id+'.'+certbotId);
});

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})