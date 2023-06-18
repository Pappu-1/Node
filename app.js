// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });


const express = require('express');
const app = express();
app.use(express.json())

// app.get('/add',(req,res) => {
//   const num1 = Number(req.query.num1);
//   const num2 = Number(req.query.num2);
//   if(isNaN(num1)|| isNaN(num2)) {
//     console.log("not a valid input");
//     res.send({ error: "Please provide valid input" });
//     return;
//   }
//   const sum = num1 + num2 ;
//   console.log(sum);
//   res.send({ sum });
// });

// app.listen(3001, () => {
//   console.log('Example app listening on port 3001!');
// });

// app.get('/divide',(req,res) => {
//   const num1 = Number(req.body.num1);
//   const num2 = Number(req.body.num2);
//   if(isNaN(num1)|| isNaN(num2) || num2==0) {
//     console.log("not a valid input");
//     res.send({ error: "Please provide valid input" });
//     return
//   }
//   const divide = num1 / num2;
//   res.send({ divide });
// });

// app.get('/addlist',(req,res)=>{
//   const num =req.query.Number;
//   const number = num.split(",");
//   console.log(number);
//   let sum =0;
//   for(let i=0;i<number.length;i++){
//     sum+=Number(number[i]);
//   }
//   res.send({sum})
// });

app.get('/mullist',(req,res)=>{
  const num =req.query.Number;
  const number = num.split(",");
  // console.log(number);
  let mul =1;
  for(let i=0;i<number.length;i++){
    mul *=Number(number[i]);
  }
  res.send({mul})
});

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});