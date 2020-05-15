// JavaScript source code

var canvas = document.querySelector('canvas');

var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
var width = 50;
var currx = 50;
var base = 200;




var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 3, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 8, color: "purple" }

]
    
for (i = 0; i < fruit.length; i++) {
    var h = fruit[i].quantity;
    var cl = fruit[i].color;
    var na = fruit[i].name;
    

    c.fillStyle = cl;
    c.fillRect(currx, canvas.height - h, width, h);
    //currx += width + 20;
    c.font = "10px Arial";
    c.fillStyle = "black";
    c.fillText(na, currx+1, canvas.height - h - 10);
    c.fillText(h, currx+1, canvas.height - h - 2);
    currx += width + 20;
}

