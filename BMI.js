//const readLineSync = require('readline-sync');

// var weight, height, BMI;
// weight = 58;
// height = 1.60;
// console.log("Weight " + weight + "kg and Height " + height + "m");
// BMI = weight / (height * height);
// console.log("Your Body Mass Index is: " + BMI);
// console.log("and");
// console.log("You are Healthy.");

// function showAlert() {
//     alert("Hey!!");
// }

// showAlert();

// function showAlert(msg) {
//     alert(msg);
// }

// var a = "Neeraj is Awesome!!";
// showAlert(a);

// function sum(a, b) {
//     console.log(a + b);
//     alert(a + b);
// }

// sum(9, 6);


// function summa(a, b) {
//     return a + b;
// }

// var summ = summa(9, 6);
// console.log(summ)

// hoist();

// // var x = 10;
// function hoist() {
//     console.log(x);
//     var x = 10;
// }

// // hoist();

// hoisted();

// function hoisted() {
//     console.log('Hoisted');
// }


/// FUNCTION WITHIN FUNCTION

// function outerfun() {
//     // innerfun();
//     var outer = 10;
//     innerfun1();
//     function innerfun1() {
//         // var inner1 = 100;
//         innerfun2();
//         var inner1 = 100;
//         function innerfun2() {
//             var inner2 = 200;
//             console.log(inner2);
//             console.log(inner1);
//             console.log(outer);
//         }
//     }
// }

// outerfun();

/// USER INPUT ///
// function fibonacci(n) {
//     var a = 0;
//     var b = 1;
//     var c;
//     while (a <= n) {
//         c = a + b;
//         if (c == n) {
//             return true;
//         }
//         a = b;
//         b = c;
//     }
//     return false;
// }

// let n = parseInt(readLineSync.question("Enter n"))
// console.log(fibonacci(n));



/// FUnction EXPRESSION ///


// var factorial = function fact(n) {
//     var ans = 1;
//     for (var i = 1; i <= n; i++) {
//         ans = ans * i;
//     }
//     return ans;
// };

// var factorial2 = function (n) {
//     var ans = 1;
//     for (var i = 1; i <= n; i++) {
//         ans = ans * i;
//     }
//     return ans;
// };

//console.log(factorial(5))
// console.log(factorial);
// console.log(factorial2);

// function a() {
//     console.log("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// a()b();

// function ncr(n, r, factoria) {
//     return factoria(n) / (factoria(r) * factoria(n - r));
// }

// console.log(ncr(6, 2, factorial));





// MULTI-DIMENTIONAL arrAY
// const a = new array(4);
// for (let i = 0; i < 4; i++) {
//     a[i] = new array(4);
//     for (let j = 0; j < 4; j++) {
//         a[i][j] = `[${i}, ${j}]`;
//     }
// }

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log(a[i][j]);
//     }
// }


// const arr = [1, 2, 3];
// arr.property = "value";
// console.log(arr.property); // "value"


// var arr = [1, 2, 3, 4, 5, 6];

// function print(element, index) {
//     console.log(element + " " + index);
// }

// arr.forEach(print);



// FUNCTION WITH DYNAMIC NO. OF ARGUMENT 
function printAll() {
    for (var i = 0; i < arguments.length; ++i) {
        console.log(arguments[i]);
    }
}
printAll('mango', 'apple'); // Prints - mango apple
printAll('fire', 'water', 'ice', 'gas'); // Prints - fire water ice gas




// DEEP COPY
// ● In Deep copy, The values that are copied in the new variable are copied and
// disconnected from the original variable, which means if you try to change the
// new variable, the original variable shouldn't have any changes.
// ● For a primitive value, you use a simple assignment:
var u = 10;
var v = u;
v = 6;
console.log(u)

// SHALLOW COPY
// ● In shallow copy, when we copy the original object into the new object, the new
// object has the copy of the original object's memory address, which means
// both objects point to the same memory address.

var susan = {
    name: "Neer",
    roll: 32
}

var neeraj = susan;

susan.name = "Susan"

console.log(neeraj)
console.log(susan)

// MAKING DEEP COPY FOR DEFAULT SHALLOW COPY 
// FOR OBJECTS
//METHOD-1 using SPREAD Operator
var susan = {
    name: "Neer",
    roll: 32
}

var neeraj = { ...susan };

susan.name = "Susan"

console.log(neeraj)
console.log(susan)

//METHOD-2
var susan = {
    name: "Neer",
    roll: 32
}

var neeraj = Object.assign({}, susan);

susan.name = "Susan"
neeraj.name = "guru"

console.log(neeraj)
console.log(susan)

// Methods for arrays for MAKING DEEP COPY FOR DEFAULT SHALLOW COPY
// METHOD - 1 using SPREAD Operator
var arr = [10, 20, 30]
var arr2 = arr;
arr2.push(40);

console.log(arr, arr2)

var arr3 = [...arr];
arr.pop();
console.log(arr, arr3)

// METHOD - 2 using MAP Method
// ● In shallow copy, when we copy the original object into the new object, the new 
// object has the copy of the original object's memory address, which means both objects point to the same memory address.
// ● array.map () method does not modify the original array. It returns a new array value.

var arr4 = arr.map(el => el)
console.log(arr4)
arr4.push(21)
console.log(arr4, arr)

// arrOW FUNCTION
// arrow function allows us to write shorter function syntax.

// without using arrow func
var ans = function (x, y) {
    return x * y;
}

console.log(ans(2, 3));

// with using arrow func
var ans = (x, y) => {
    return x * y
}

// var ans = (x,y) => x*y;

console.log(ans(2, 3));

// REDUCE METHOD
// ● The reduce() method aims to combine the elements in a sequence and give us a reduced single value output.
// Syntax:
// array.reduce(function, initialVal)
// The first argument of the reduce function is called a reducer function, and the second argument is an optional initial value.

// Using Reduce() without initialValue
var arr = [10, 20, 30, 40]
var result = arr.reduce((acc, cur) => acc + cur);
console.log(result)

// Using Reduce() with initialValue
var arr = [10, 20, 30, 40]
var result = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(result)

// FILTER METHOD
// ● The filter function is used to filter the value inside an array.
// ● The array.filter() method is used to create a new array from a given array
// consisting of only those elements from the given array which satisfy a condition set by the argument method.

var arr = [10, 12, 13, 17, 19]
var arr2 = arr.filter(isODD);
console.log(arr, arr2)

function isODD(x) {
    return x % 2;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var myarr = array.filter(v => v % 3 === 0);
console.log(myarr);


/// for..in AND for..of Loop ///
// Both for..of and for..in statements iterate over the list. The values iterated on are different though, 
// for..in returns a list of keys on the object being iterated, whereas  
// for..of returns a list of values of the numeric properties of the object being iterated.
// for..of: It lets you loop over iterable data structures such as arrays, Strings, Maps, NodeLists, and more
let list = [4, 5, 6];
for (let i in list) {
    console.log(i);         // output: 0 1 2 
}

for (let i of list) {
    console.log(i);         // output: 4 5 6 
}

let Strings = "neer runs";
for (let i in Strings) {
    console.log(i);         // output: 0 1 2 3 4 5 6 7 8
}

for (let i of Strings) {
    console.log(i);         // output: n e e r  r u n s
}


// SET TIMEOUT
function add(a, b, c, d) {
    console.log(a + b + c + d)
}
setTimeout(add, 1000, 1, 2, 3, 4)


/// HOW TO CHECK KEYS IN OBJECTS   /// 

// 2 METHODS: 1- using "key in object method, 2- using hasOwnProperty method"

// Method-1
// function propertyExists(obj,path) {
//     // Write logic here
//     for (let key of path){
//         if (key in obj){
//             obj = obj[key];
//         }else{
//             return false;
//         }
//     }
//   return obj;
// }

// Method-2
function propertyExists(obj, path) {
    // Write logic here
    for (let key of path) {
        if (obj.hasOwnProperty(key)) {
            obj = obj[key];
        } else {
            return false;
        }
    }
    return obj;
}

// function propertyExists(obj,path) {
//     // Write logic here
//     for (var i = 0; i < path.length; i++){
//         var key = path.charAt(i);
//         if (obj.hasOwnProperty(key)){
//             obj = obj[key];
//         }else{
//             return false;
//         }
//     }
//   return obj;
// }

var object = { "a": { "b": "dadsa" } }
console.log(propertyExists(object, "ab"))










