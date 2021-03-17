const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('views', path.join(__dirname,"..", 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.render("home");
})




app.listen(3030, () =>{
    console.log("App Running!");
})