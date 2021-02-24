const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //this line of code is required for body parser to be used
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html") //dir name takes the entire directiry name up to this point
});
app.post("/", function(req, res) {
    var num1 = Number(req.body.num1); //Number must be used to tell comp that these variables are to be parsed as a number and not a string
    var num2 = Number(req.body.num2);
    var result = num1 + num2
    res.send("The result is:" + result);
});
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});
app.post("/bmiCalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    bmi = weight / (weight * height);
    res.send("Your BMI is " + bmi);
})

app.listen(3000, function() {
    console.log("the server has been run");
});