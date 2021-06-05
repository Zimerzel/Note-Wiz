const express = require('express');

var app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(port,() => {
    console.log('listening on port: ',port);
})