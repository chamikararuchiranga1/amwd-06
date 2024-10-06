console.log('Run ACPT..!');
const x = 30;
const y = 10;
const tot = x + y;
console.log(tot);

document.write('Chamikara Ruchiranga');
document.write('<h1>ACPT</h1>');
document.write('<input type="text">');

// Numbers 
const dd = 10.55304;

// String 
const string = "ACPT 50";

// Boolean 
const bool = false;

// Object 
const obj = { name: 'Chamikara', age: 40, address: 'beruwala', haveFriend: true }

// Array 
const array = [45, 'ACPT', true, { name: 'chamikara', address: 'beruwala' }, [65, 34, 'string']]

// Let 
let a = 10;
console.log(a)
a = 20;
console.log(a);
{ let ab = 30; }
// console.log(ab)

// Var 
var v = 20;
console.log(v)
var v = true;
v = 'acpt'
console.log(v)
{ var vv = 30; }
console.log(vv)

// Const 
const c = 10;
// const c = 20;
// c = 20;
{ const cc = 40 }
// console.log(cc);

// Arithmetic Operators 

const s = 25;
const d = 10;

// Addition (+)
const addition = s + d;
console.log(addition);

// Subtraction (-)
const sub = s - d;
console.log(sub);

// Multiplication (*)
const mult = s * d;
console.log(mult);

// Division (/)
const div = s / d;
console.log(div);

// Moduls (%)
const mod = s % d;
console.log(mod);

// Increment (++)
let j = 50;
j++
j++
j++
console.log(j)

// Decrement (--)
let k = 50;
k--
console.log(k)

// Comparison Operators
const l = 14;
const m = 13;

// Equal (==)
console.log(l === m);

// Not Equal (!==)
console.log(l !== m);

// Greater than (>)
console.log(l > m)

// Less than (<)
console.log(l < m)

// Greater than or Equal to (>=)
console.log(l >= m);

// Less than or Equal to (<=)
console.log(l <= m)

// Logical Operators 
const q = true;
const t = true

// AND (&&)
console.log(q && t);

// Or (||)
console.log(q || t);

// Not (!)
console.log(!q)

// Flow Controllers

// If 
const stu1 = 300;
const stu2 = 250;

if (stu1 == stu2) {
    console.log('running if..!')
} else if (stu1 < stu2) {
    console.log('pring student..!')
} else {
    console.log('Error msg..!')
}

// Switch 
const val = 'Intake 03';
switch (val) {
    case 'Intake 01':
        console.log('ACPT - AMWD intake 01');
        break;
    case 'Intake 02':
        console.log('ACPT - AMWD intake 02');
        break;
    default:
        console.log('Error....!')
}

// Input marks 1 -100
// 75 - A , 65 - B, 45 - C, 35 - S, fail

// Array 
const ar = 56;
const arr = 43;

const array1 = [10, 'chamikara', { name: 'acpt' }, true];
console.log(array1.length);

const fruits = ['Banana', 'Mango', 'Apple', 'Orange'];

// Pop 
// const fruit = fruits.pop();
// console.log(fruits);
// console.log(fruit);

// Push 
// fruits.push('Kiwi');
// console.log(fruits)

// Shift 
// const fruit = fruits.shift();
// console.log(fruit)
// console.log(fruits)

// UnShift 
// fruits.unshift('Kiwi');
// console.log(fruits)

// Loop
// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// While 
let tt = 0;
while (tt < fruits.length) {
    console.log(fruits[tt]);
    tt++
}

// DO While 
let ty = 0;
do {
    ty++
    console.log(fruits[ty]);

} while (ty < fruits.length)


// global scope
const globle = true;

// function scope 
function getName() {
    const fun = false;
}

// block scope 
{

}

// Object
const car = {
    colour: 'red',
    wheelCount: 4,
    name: 'bmw',
    year: '2017',
    drive: function () {
        console.log('Drive....................!');
    },
    break: function () {
        console.log('Break.....................!');
    }
}

console.log(car.year);
car.break();
car.drive();

// Function

// Name Function 
function SetName() {
    console.log("Print Name Function")
}
SetName();

// Anonymouse function
const getAddress = function () {
    console.log('Print Anonymouse Function')
}
getAddress();

// Arrow Function
var SetAddress = () => {
    console.log('Print Arrow function')
}
SetAddress()

function printName(name, lastName) {
    console.log("Print : ", name, " ", lastName)
}

printName("Chamikara", 'ACPT')
printName("Yasindu", 'ACPT')

// function equalNumber (num1, num2) {
//     console.log("Total : ",num1+num2)
// }

const equalNumber = (num1, num2) => "Total : " + (num1 + num2)

const number1 = equalNumber(30, 70);
console.log(number1)
const number2 = equalNumber(45.7, 90.5);
console.log(number2)

const getDetails = (name1) => "My Name is " + name1

const data1 = getDetails('Kasun');
console.log(data1);
const data2 = getDetails('Dasun')
console.log(data2);

// Input Student name and Marks
// Marks > 60
// Print => 'Eshan is Passed / Eshan is Fail'

const pritnDetails = (name, marks) => {
    let resu = ''
    if (marks > 60) {
        resu = name + " is Passed.."
    } else {
        resu = name + " is Fail.."
    }
    return resu;
}

const result = pritnDetails('Kamal', 45);
console.log(result)

// Events 

// onCLick 
function showMe() {
    document.getElementById('display1').innerText = 'ACPT'
}

// on Change 
function onChange() {
    const data = document.getElementById('input1').value
    console.log(data)
}

// Mouse Over 
function onMouseOver () {
    console.log('On Hover event..')
}

// Mouse Out 
function onMouseOut () {
    console.log('On Mouse Out event..')
}

// Key up 
function onKeyUp () {
    const val = document.getElementById('input2').value
    // console.log(val)
}

// Key Down
function onKeyDown () {
    const val = document.getElementById('input2').value
    // console.log(val)
}

// Key Press
function onKeyPress () {
    const val = document.getElementById('input2').value
    console.log(val)
}

function onChangeTextError () {
    const val = document.getElementById('from-input').value;
    const reg = /^(0|[1-9]\d*)(\.\d+)?$/
    if(reg.test(val)){
        document.getElementById('error').innerText = "Valid Number..!"
        document.getElementById('error').style.color = "green"
    }else{
        document.getElementById('error').innerText = "Invalid Number..!"
        document.getElementById('error').style.color = "red"
    }
}

function img2Hover (){
    document.getElementById('img-2').style.display = 'none'
    document.getElementById('img-1').style.display = 'block'
}

function img1HoverOut (){
    document.getElementById('img-2').style.display = 'block'
    document.getElementById('img-1').style.display = 'none'
}
//////////////////////////////////////////
function img11Hover (){
    document.getElementById('img-11').src = '../assets/chat-c.png'
}

function img11HoverOut (){
    document.getElementById('img-11').src = '../assets/chat-c-1.png'
}


// 1) 
// Text input and submit button 
// intern => Intern S E
// ase => Associate S E
// se => S E
// sse => Senior S E
// atl => Assistant Tech Lead
// tl => Tech Lead
// Error key Word 

// 2) 
// stor array and genarate Random Numbers 100 (1 - 100)
// text input and submit button 
// input 0 - 100 value in text feild 
// Display Moduls

// 3)
// uName = AdMin 
// uPass = admin123
// input user name and password 
// Dispaly Login Success..!
// display Login Fail..!

