var express = require("express");
var cors = require('cors')
var data = require("./users.json");
var app = express();
app.use(cors());
var port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server running on port 8000");
});

app.get("/user-lists", (req, res, next) => {
    // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    res.json(data);
});

// const data = require('/path/to/users.json')

// app.get('/url', (req, res) => {
//     res.header("Content-Type", 'application/json');
//     res.send(JSON.stringify(data));
// })