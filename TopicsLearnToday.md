1. Client - frontend

2. Server - backend

3. 7 Data types in javascript

4. Learn Interpretor & compiler

5. Learn simple tags h1 & br

6. customizations & 1 byte = 8 bits

frontend End Code

<!DOCTYPE html>
<html lang="en"> // DOM
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <Style> // internal css
      body {
        background-color: #000000
        }
     </Style>
  </head>

  <body>
    <h1>reverse</h1>
    <!-- 1234 -->
    <!-- 4321 -->
    Reverse : <input type="number" name="rev" id="rev" />
    <p style= "background : red">client</p>
    <button onclick="add(document.getElementById('rev').value)">Add</button>
    <script src="reverse.js"></script>

  </body>
</html>

<!-- Backend Code


//server side.
function add(a) {
var result =
  parseFloat(a.toString().split("").reverse().join("")) * Math.sign(a);
return alert(result);
}

// Documnet Object Model = DOM -->

Css type

Css stands for - cascading style sheet

there are three types
  1 Internal Css
        <style>
      body {
        font-family: "Helvetica Neue", Helvetica;
        background-color  : red;
      }
    </style>
  2 External css
    Linked file - <link rel="stylesheet" href="styles.css">

  3 Inline Css
      style = "background-color: blue;"


pixels is a space between character


Today Logic In javascript which is used to check value greater than 18 

// age Data type array

//index always start from 0 = 12

// length always start from 1 = 13

// 0 = 10;
// 1 = 20;
// 2 = 30;
// 3 = 40;
// 4 = 50;
// 5 = 60;
// 6 = 70;
//

let Age = [10, 12, 15, 18, 4, 55, 52, 3, 54, 19, 5, 3, 10];

// index = 0;
// 0+1 = 1;

for (let index = 0; index < Age.length; index++) {
    const element = Age[index];
    if (element >= 18) {
        console.log(`This value is greater than 18 ${element}`)
    }
    else {
        console.log(`This value is less than 18 ${element}`)
    }
}


