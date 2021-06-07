const express = require('express');

var app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
