//window.alert("hi");
//var a = 10;
//window.alert(a);
//a = "Hello"
//window.alert(a);
// console.log(a)
// a = 10
// console.log(a)

// var a = "5";
// var b = "10";


// var temp = a
// a = b
// b = temp


// console.log("a is " + a);
// console.log("b is " + b);

// console.log(Math.pow(10, 2))
// console.log(Math.pow(10, 10))
// console.log(Math.pow(10, 100))
// console.log(Math.pow(10, 1000))
// console.log(Number.MAX_VALUE)
// console.log(Math.sqrt(-1))
// console.log(parseInt("100"))
// console.log(parseInt("aaaa"))



// var a = 0;
// var a = "abcd";
// var a = "";
// var a;
// var a = null;
// if (a > 0) {
//     console.log("Positive");
// }
// else if (a < 0) {
//     console.log("Negative")
// }
// else {
//     console.log("Zero");
// }

// if (a) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// var i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// for (var j = 10; j <= 22; j++) {
//     console.log(j);
// }

// var k = 23;
// do {
//     console.log(k);
//     k++;
// } while (k <= 26);


// var s = "hello";
// console.log(s[1]);
// console.log(s[3]);


// var a;
// if( typeof(a) ) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }


// var demo = document.getElementById('demo')
// demo.style.borderColor = 'green';

// var clas = document.querySelector('.demo:nth-child(2n)');
// clas.style.borderColor = 'blue';
// for (var i = 0; i < clas.length; i++) {
//     clas[i].style.borderColor = 'blue';
// }

// console.log(clas)

// function sayHello() {
//     alert('Hello!!!')
// }

// function sayBye() {
//     alert('Bye!!!')
// }

// var helloButton = document.getElementById('btn2');
// helloButton.addEventListener('click', sayHello);
// helloButton.addEventListener('click', sayBye);
'use strict'
var count = 0;
function counter() {
    var id = document.getElementById('sp');
    id.innerText = ++count;
    console.log(count)
    return;
}


var box = document.getElementById('box');
box.addEventListener('click', counter)



