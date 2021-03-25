alert("Hello world, press ok to get to the webpage :) ")
// one line comment
//its for showing a message 
/*
Datatypes : 
-String: any text or set of characters 
" " or ' ' 

Numbers: any number in js
(2 , 4.6, 0.9) 

Boolean: True or false
Variables: store valuse into it

camel case 
var firstName = "Omar "

Operators : a sympol that does an action 

; is not obligatry in js , its later on its required 

*/



'hello my name is omar'
'345'
'3+3'

alert(3+20)


1 
2.45 
9.8 

//assignment operator  =
var X = "Omar"
X
//arthmatic operators + - * / **(power) %  etc 
var z = 2+3 

var x=25
x+X
x 

var z = x*


//after break 

// console is important for deveolperss to get to know what is hapeninng 
// something we can use 
//1-show the errors if we have "usuful when there is a  1000 lines of code " 
//var firstName = 'Omar';
//console.log(x*z)
//console.log(firstName)

// concatination 
//console.log(X + firstName);
//var fullName = firstName + X
//console.log(fullName)

//comparison operartors 
// greater than > 
// less than
// greater than or equal >=
// less than or equal >= 
//not equal !=
// == compare two values 
// === strictly equal , check everything datatype and value 


console.log(x==X)
var x =20 
var y='20'
console.log(x==y) // is x equal y ? 

console.log(15 == '15');// true no matter what data types 
console.log(15 === '15') //false datatype



//prompt take inputs from visitors 

var y = prompt('whats your name?');
console.log(y);
document.write(y);
document.write('<h1>' +y+ '</h1>');


//conditional statments
// if statements evalutes true or false 
/*
if(true){ run the code! }
else {if its false }  
*/

var happy = true; 
if (happy == false)
{console.log('sorry for you'+ y)}
else if(happy == true){ console.log('its logged')}
else {alert('WOW great for you ' + y)}


/* 
last task
ask the user 
show an image

*/
var fav = prompt('what your fav ?' , 'cyper,lol,dota2');

if (fav == 'cyper') { document.write('img src ')}
else if (fav == 'lol') {document.write('img src ')}
else {document.write('img src')}
