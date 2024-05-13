"use strict"

/*
function testVar()
{
  var a =50;
  if(true)
    var a = 20;
   console.log(a);
   console.log(a);
}
testVar();

//o/p : 20
    //    20




function testLet()
{
  let a = 40;
  if(true)
  {
   let a = 30;
   console.log(a);
 }
   console.log(a);
}

testLet();

// O/p : 30
      //   40

for (var i = 0; i < 5 ; i++) {
  console.log(i) // till 4
}
console.log(i); /// till 5


for (let i = 0; i < 5 ; i++) {
  console.log(i) //till 4
}

console.log(i);  //through an error

*/

/*const color = [];
color.push("red");
color.push("green");

//color = 'blue' // will through assignment console.error(

console.log(color); */

/*
class User{
  constructor(username , email , password) //create constructor
  {
    this.username = username;
    this.email = email;
    this.password = password;
  }

static countUser(){                   //static method
  console.log("There are 50 users");
}

  register()  // create method
  {
    console.log(this.username + " " + 'now is registered');
    console.log(this.email);
  }
}

let bob = new User('sam' , 'samridhi@abc.in' , 'h2jw');  // create object of User Class

//bob.register(); // call the method via object
//User.countUser(); // call countuser method from class User

class Member extends User
{
  constructor(username , email , password , memberPackage)
  {
    super(username , email , password )
    this.package = memberPackage;

  }

  getPackage()  //create a method
  {
    console.log(this.username + 'is subscribed to the ' + this.package + 'package');
  }
}


//create a variable of Member class

let mike = new Member('ritik' , 'dh@gmail.cj' , 'jdw' , 'stamdard');

mike.getPackage();

mike.register();

*/

 /*document.addEventListener('DOMContentLoaded', function() {
    // Code that manipulates the DOM goes here
  //  let template = '<h1>Hello</h1><p>This is a simple template in JavaScript</p>';

  //  let template = '<h1>Hello</h1>' +
  //  '<p>This is a simple template in JavaScript</p>';

function upperCase(word)
{
  return word.toUpperCase();
}
let name = 'Ritik';
    let template = `<h1> ${upperCase('Hello')} , ${name}</h1>
    <p>This is a simple template in JavaScript</p>`;
    document.getElementById('template').innerHTML = template;
});

/*
//NOT WORKING
let template = `
    <h1>Hello</h1>
    <p>This is a simple template in JavaScript</p>
`;

document.getElementById('template').innerHTML= template; */

//String function and string methods

//let theString = 'Hello , My name is SAM and I love javaScript';

//startsWith()
//endsWith()
//includes()
/*
console.log(theString.startsWith('Hello')); // will return true
console.log(theString.startsWith('ll')); // will return false


console.log(theString.endsWith('javaScript')); // will return true
console.log(theString.endsWith('java')); // will return false


console.log(theString.includes('love')); // will return true
console.log(theString.includes('loves')); // will return false

*/


//NUMBER methods

/*
// hexa decimal

console.log(0xFF);

//binary decomial

console.log(0b10101);

//octal decimal

console.log(0o543);

//finite NUMBER

console.log(Number.isFinite(3)); // will return true


console.log(Number.isFinite(NaN));  // will return fasle

console.log(Number.isNaN(NaN)); // will return true

console.log(Number.isNaN('string'));


console.log(Number.isInteger(2)); // return true
console.log(Number.isInteger(-2)); // return true
console.log(Number.isInteger(Infinity)); // return false




function greet($greeting)
{
  console.log($greeting);
}

greet('Hello'); // will print Hello

greet(); // will print undefined


function greet1($greeting = 'Hello') // we need to define a value
{
  console.log($greeting);
}

greet1();  // will print Hello



///Spread Operator

let args1 = [1,2,3];

function test(){
  console.log(args1);
}

//test.apply(null , args1);
test(...args1);


let args2 = [4,5,6];

function test1()
{
  console.log(args1 + "," + args2);
}

test1(...args1 , ...args2);

*/




























//Set
 /*


let myArray = [49,89,37,49,100];

let mySet = new Set(myArray);

mySet.add('110'); // to add an getElementById
mySet.add({a:1 ,b :2}); //to add objects

mySet.delete(37);

//mySet.clear();

//console.log(mySet);

mySet.add('11');
//onsole.log(mySet.size);


mySet.forEach(function(val){
  console.log(val);
});

*/








//map
 /*
let myMap = new Map([['a1', 'Hello'], ['a2' , 'Sam'] , ['a3' , 'Dis']]);

myMap.set('a4', 'Dis'); // add elements to map
myMap.delete('a1');

console.log(myMap);
console.log(myMap.size);


///Weak Set

let carWeakSet = new WeakSet();

let car1 = {
  make : 'honda',
  model : 'Civic'
}

carWeakSet.add(car1);


let car2 = {
  make : 'weal',
  model : 'Sunday'
}

carWeakSet.add(car2);
carWeakSet.delete(car2);
console.log(carWeakSet);





///Weak Map

let carWeakMap = new WeakMap();

let key1={
  id : 1
}

let car1={
  make : 'Honda',
  model :'Civic'
}

carWeakMap.set(key1 , car1);

carWeakMap.delete(key1);
console.log(carWeakMap);

*/



/////////////////////////////////////////////////////////////////////////Arrow Function
/*
function Prefixer(prefix)
{
  this.prefix = prefix;
}
/*
Prefixer.prototype.prefixArray= function(arr)
{
  let that = this;
  return arr.map(function(x)
{
  console.log(that.prefix + x);
});
}


Prefixer.prototype.prefixArray= function(arr)
{
  return arr.map((x) =>
{
  console.log(this.prefix + x);
});
}

let pre   =  new Prefixer('Hello ');
pre.prefixArray(['Brad', ' Jef']);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////


/*
let add = function(a,b)
{
  let sum = a+b;
  console.log(sum);
//  return false;
}

add(2,2); */

/////////////////////with arrow Function

/*
let add = (a,b) =>
{
  let sum = a+b;
  console.log(sum);
//  return false;
}

add(3,2);
*/

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////
