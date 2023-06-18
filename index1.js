console.log("pappu")
// Function to take a  string and count the vowels
const express = require('express');

const app = express();
app.use(json());

const vowels =['a','e','i','o','u']

let countVowels =(string) => {
    string = string.toLowerCase();
    count =0;
    for(let i=0; i< string.length; i++) {
        if(vowels.includes(string(i))) count +=1;
    }
    return count;
}

app.get('/countVowels', (req,res) => {
    let string = req.body.abc;//validation
    console.log(req.body.abc);
    let vowels = countVowels(string);
    res.send({"vowels": vowels});
})
console.log(countVowels("This is pappu"))

// Port + IP Address == Socket
const port = 3001;
const ip = "localhost";

app.listen(port, ip, () => {
    console.log("Started Listening");
})
