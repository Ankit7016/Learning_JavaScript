//THIS IS FOR VARIABLE NOTES 


// JavaScript Variables can be declared in 4 ways:
// Automatically
// Using var
// Using let
// Using const

//if we have const value 
const PI=3.1454840;

// is we not like to redeclare the same variable in its scope
let blockScop="This is block scop var";

//If we used variable anywhere and it is okay if its redefine it then 
var itsOkay="this is var keyword"


///==================What is hoisting 
// hoisting in javascript  mean we used variable before it initialization in its given scop
//ex
console.log(myName); // that is give you undefine value as myName
var myName="Anni kaklotar";


// The Const and Let keyword not supporting Hoisting But var keyword support hoisting

//console.log(myFirstName); // this will give you a referace Error 
let myFirstName="Anni";

//console.log(myFirstName);// this will give you a referace Error 
const mySecondName="Anni"; 

let x = "Volvo" + 16;
console.log("------->",x);
// in java script we can only declare variable by the  " $ /  A-Z /_" 

let name="anni";
console.log(name);
var _name="anni";
var $name="anni";

name =10;
console.log("after asign name = 10");
console.log(name);
//var 5name="Not Valid ";
//var #name="Also not valid any Speacial Character without $sign"


