var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extend: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res){
  res.json(dataArray)
})

app.get("/api/waitlist", function(req, res){
  res.json(waitList)
})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/tables", function (req, res) {
    console.log('the post happend');

    var newReservation = {
        name: req.body.customerName,
        phoneNum: req.body.phoneNumber,
        email: req.body.customerEmail,
        customerID: req.body.customerID
    };
    if (dataArray.length < 2){
      dataArray.push(newReservation);
      console.log(dataArray);
      res.json(newReservation);
    } else{
        waitList.push(newReservation);
        console.log(waitList);
        res.end();
    }



});


var dataArray = [];
var waitList = [];
