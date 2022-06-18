// Object &  OOP Language

// let person = {
//     name: 'Sivakumar M',
//     age: 32,
//     interest: ['I will become a Front-end Developer'],
//     isAlive: true,
//     address: {
//         city: 'Chennai',
//         state: 'Tamilnadu'
//     },
//     greetings: function(){
//         let message = `Hi my name is ${this.name}, and my Interest is ${this.interest}`;
//         return message;
//     }
// }

// console.log(person.greetings());



// Factory function methods
function myFunction(name){
    return {
        name: name,
        sayHi: function(){
            let msg = `Hello my name is ${this.name}`;
            console.log(msg);
        }
    };
}
let anbu = myFunction('Sivakumar M');
anbu.sayHi();

// Constructor function methods

function Employer(name, profession, salary){
    this.name = name;
    this.profession = profession;
    this.salary = salary;
    this.sayHi = function(){
        console.log(`Hello my name is ${this.name} & My Profession is ${this.profession} & salary ${salary}`) 
    }
}

let employee1 = new Employer('Sivakumar M', 'Front-end Developer', 75000
)
employee1.sayHi();


// Dynamic Nature Object
const x = {
    name: 'Sivakumr'
}
console.log(x.hasOwnProperty('name'));


// Javascript Constructor Property
let name = new String('sivakumar M');
let age = new Number(32);
let  isAlive = new Boolean(true);

//Javascript Functions are object
function Employer(name, profession, salary){
    this.name = name;
    this.profession = profession;
    this.salary = salary;
    this.sayHi = function(){
        return `Hello my name is ${this.name}`;
    }
}
let employee2 = new Employer('Vasanthi S', 'Front-end Developer', 110000);
console.log(employee2.sayHi());
Employer.call({}, 'Bhoominathan S V');

// javascript Primitive and reference Type difference

// Primitive is unmutable
let a1 = 10;
let b1 = a;
a = 20;
console.log(a1);

let obj1 = {
    name: 'Siva',
};
console.log(obj1);

let obj2 = obj1;

obj1 = {
    name: 'Bhoomi'
};
console.log(obj1);
console.log(obj2);


// Enumarating Properties

const user = {
    name: 'Siva',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}

for(prop in user){
    console.log(prop, user[prop]);
}

if('name' in user){
    console.log('Yes');
}else{
    console.log('No')
}

if('age' in user){
    console.log('Yes');
}else{
    console.log('No')
}



//Cloning Methods
const user2 = {
    name: 'Siva',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}
console.log(user2);

let another = {};

// there are three methods for cloning

// First methods
for(let key in user2){
    another[key] = user2[key];
}
//Second Method
let another1 = Object.assign({}, user2);
    console.log(another1);
//Third Methods ES6
let another2 = {...user2};
console.log(another2);

// Javascript Inbuild Objects
// Math Object

let maxValue = Math.max(100, 2, 10, 4);
console.log(maxValue);


let num1 = [1000, 88, 00, 200,114];

let result = Math.max(...num1); // spread operator es6

console.log(result);

// String Objects

let employee3 = new String(
    'Vasanth'
);

let employee4 = 'Sivakumar';

console.log(employee3.concat(" ", employee4));

console.log(employee4.toLowerCase());



// Template Literals
let templateLiterals = `Hi I am learning 'Javascript' `;
console.log(templateLiterals);


// Date Object

let time = new Date();
console.log(time.getDate());

console.log(time.getDay());
console.log(time.getFullYear());

// Adding element in array

const fruits = [4,5,6];

console.log(fruits[1]);


// Finding Array element

let myArray = [1,2,3,4,5];
if(myArray.indexOf(5) !== -1){
    console.log('Available');
}else{
    console.log('Not Available');
}


// Important Call back function and Finding array in reference method
const list = [
    {
        name: 'Nokia',
        category: 'Smartphone',
        price: 30000

    },
    {
        name: 'samsung',
        category: 'keypad',
        price: 1000
    }
];

let finalResult = list.findIndex(function(listitem){
    return listitem.name === 'samsung';
});
console.log(finalResult);


// Arrow function methods
let arrowFunction = () => {
    return 'Arrow function are great!';
}
console.log(arrowFunction());

// accending order

let order = [100,2,77,110,1000,1];
console.log(order);


// Traditional Function
function compare(value1, value2){
   return value1 - value2;
}
order.sort(compare);


// Arrow function

let compare1 = (value1, value2) => {
    return value1 - value2;
}
console.log(order.sort(compare1));

for(prop in order){
    console.log(prop, order[prop]);
}


//  Empty array

let alphabet = ['a','b','c','d'];
console.log(alphabet);

alphabet = [];
console.log(alphabet);


//array combining methods
const shopping_cart = ['maggi', 'beans', 'masala'];
const addition_cart = ['matchbox', 'Salt'];
const rst = shopping_cart.concat(addition_cart);
console.log(rst);

const extract = rst.slice(0, 2);
console.log(extract);

//spread Operater - ES6
const shopping_cart1 = ['maggi', 'beans', 'masala'];
const addition_cart1 = ['matchbox', 'Salt'];

let result3 = [...shopping_cart, ...addition_cart];
console.log(result3);

// Array iterative methods
let dailyRoutine = ['Wakeup', 'Eat', 'Sleep'];

//for of 
for(prop of dailyRoutine){
    console.log(prop, dailyRoutine[prop]);
}

//for in 
for(let routine of dailyRoutine){
    console.log(routine);
}

/////for Each methods
const lifeStyle = ['Walking', 'gyming', 'yoga'];
console.log(lifeStyle);

//for each
lifeStyle.forEach(function(life){
    console.log(life);
});


/////Array join and split
let firstName = ['Sivakumar M', 'Bhoomi'];
let final = firstName.join('+');
console.log(final);

let firstName1 = 'Sivakumar M';
let final1 = firstName1.split(" ");
console.log(final1);


////Array sorting

//assending order
const students = [3,8,1];
students.sort();
console.log(students);

//decending order
const students2 = [3,8,1];
students2.sort((a,b) => {
    return b - a;
});
console.log(students2);

//reverse method
const student3 = [1,19,8];
student3.reverse();
console.log(student3);


// array function
const student4 = [
    {
        id:3,
        name:'Senthil'
    },
    {
        id:8,
        name:'Guna'
    },
    {
        id:1,
        name:'Anbu'
    }
];

student4.sort((a,b) => {
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    }else {
        return 0
    }
});
console.log(student4);

//Primitives: Testing a JavaScript Array (With Examples)
// allow only adults above 18

//every(); every element should be true
const queue_by_age = [17,24,32,45];
const isAllowed = queue_by_age.every((value,index,array) =>{
    return value >= 18;
});
console.log('isAllowed:', isAllowed);

//some(); any one should be true 
const queue_by_age1 = [17,24,32,45];
const isAllowed1 = queue_by_age1.some((value,index,array) =>{
    return value >= 18;
});
console.log('isAllowed:', isAllowed1);

// Testing Objects in a JavaScript Array (With Examples)

const items = [
    {
        id: 1,
        name: 'Mobiles',
        isDeliverable: true
    },
    {
        id: 2,
        name: 'Accessories',
        isDeliverable: false
    },
    {
        id: 3,
        name: 'TV',
        isDeliverable: true
    }
];
let allDelivarable = items.every((value) => {
    return value.isDeliverable === true;
});
let allDelivarable2 = items.some((value) => {
    return value.isDeliverable === true;
});
console.log("All Deliverable", allDelivarable);
console.log('Not Deliverable', allDelivarable2);

//Filtering a Javascript Array

const queue_by_age2 = [7, 9, 12,24, 32, 40, 45];
let isFilter = queue_by_age2.filter((value) => {
    return value >= 18;
});
console.log('Adult:', isFilter);

////odd & even number seperate
const numbers1 = [1,2,3,4,5,6,7,8,9,10];

let evenNumber = numbers1.filter((value) => {
    return value % 2 === 0;
});
console.log("Even Number", evenNumber);

let oddNumber = numbers1.filter((value) => {
    return value % 2 === 1;
});
console.log("Odd Number", oddNumber);

//flipkart shopping cart sample code
const cart_item = [
    {
        id: 1,
        items: 'Android Mobile',
        cost: 6500
    },
    {
        id: 2,
        items: 'Iphone Mobile',
        cost: 65500
    },
    {
        id: 3,
        items: 'Windows Mobile',
        cost: 8500
    },
];

let filterOut = cart_item.filter((value) => {
    return value.cost <= 10000;
});
console.log("affordable Filter",filterOut);

// Finding a Javascript Array - find()
const cart_item1 = [
    {
        id: 1,
        items: 'Android Mobile',
        cost: 6500
    },
    {
        id: 2,
        items: 'Iphone Mobile',
        cost: 65500
    },
    {
        id: 3,
        items: 'Windows Mobile',
        cost: 8500
    },
];

let filterOut1 = cart_item1.find((value) => {
    return value.cost <= 10000;
});
console.log("affordable Find", filterOut1);

const cart_item2 = [
    {
        id: 1,
        items: 'Android Mobile',
        cost: 6500
    },
    {
        id: 2,
        items: 'Iphone Mobile',
        cost: 65500
    },
    {
        id: 3,
        items: 'Windows Mobile',
        cost: 8500
    },
];

let filterOut2 = cart_item2.findIndex((value) => {
    return value.cost <= 10000;
});
console.log("affordable Find", filterOut2);

//Javascript Arrays: Map()
const numbers2 = [1,2,3,4,5];
let result4 = numbers2.map((value) =>{
    return value * 2;
});
console.log(result4);

//
const peoples = [
    {
        id:1,
        firstName :'Ajith',
        lastName: 'Kumar'
    },
    {
        id:2,
        firstName :'Siva',
        lastName: 'Kumar'
    },
    {
        id:3,
        firstName :'Ashok',
        lastName: 'Kumar'
    },
];
let result5 = peoples.map((value) => {
    return [value.firstName, value.lastName].join(' ');
});
console.log(result5);


//Javascript Arrays: Chaining Methods

const cart_item3 = [
    {
        id: 1,
        items: 'Android Mobile',
        cost: 6500
    },
    {
        id: 2,
        items: 'Iphone Mobile',
        cost: 65500
    },
    {
        id: 3,
        items: 'Windows Mobile',
        cost: 8500
    },
];

//sort it using low price;
let isSort = cart_item3.sort((value1, value2) => {
    return value1.cost - value2.cost; // assending
    // return value1.cont - value2.cost; //decending
})
console.log(isSort);

//sort it using title assending
let isSort2 = cart_item3.sort((value1, value2) => {
    if(value1.items < value2.items){
        return 1;
    }else if(value1.items > value2.items){
        return -1
    }else {
        return 0
    }
});
console.log(isSort2);

//Product less than 8000
let isSort3 = cart_item3.sort((value1) => {
    return value1.cost <= 8000; // assending
});
console.log(isSort3);


//Map it like this: Android phone - 7500rs
let isSort4 = cart_item3.map((value) => {
    return [value.items, value.cost].join('-'); 
});
console.log('Result:', isSort4);

//#67 - Javascript Arrays: reduce() Method
const donation = [47,78,10,60,1000];

let donationResult = donation.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(donationResult);

//#68 - JavaScript: Difference between sort(), filter(), map(), reduce() methods
//sort(), find(), filter(), map(), reduce()
const numbers3 = [34,54,65,12,78];

//sort
let result6 = numbers3.sort();
console.log(result6);

//find
let result7 = numbers3.find((value) => {
    return value > 50;
});
console.log(result7);

//filter
let result8 = numbers3.filter((value) => {
    return value > 50;
});
console.log(result8);

//map
let result9 = numbers3.map((value) => {
    return "#" + value;
});
console.log(result9);

//Reduce
let result10 = numbers3.reduce((value1, value2) => {
    return value1 + value2;
});
console.log(result10);

//#69 - JavaScript Arrays: Interview Questions (Solution) - (தமிழில்) (Tamil) | JavaScript Course

// Create array Object
let arrayObject = [1, 'Sivakumar M', 'Salem', 636015];
console.log(arrayObject);

let arrayObject2 = new Array(1, 'Sivakumar', 'salem', 636015);
console.log(arrayObject);

//Take the below array and copy it using the slice method and the for loop method.

let myArray1 = [1,2,3,4,5];
console.log(myArray);

let sliceResult = myArray1.slice(0,4);
console.log(sliceResult)

let myArray2 = [];

//spread method
let tempArray = [...myArray1];
console.log('temparray', tempArray);

for(let i = 0; i < myArray1.length; i++){
    console.log("Result", i);
    myArray2[i] = myArray1[i];

}
console.log('Result', myArray2);

//Empty this array:

let emptyArray = [1,2,3,4,5,6,7,8,9,10];

let emptyArray2 = [];

console.log(emptyArray);
console.log(emptyArray2);


//What type is an Array set to?

let typeArray = [1,2,3,4,5];
console.log(typeof typeArray);

//How can you check if something is an Array?

let typeArray1 = [1,2,3,4,5];
let typeString = 'Sivakumar M';

let result11 = Array.isArray(typeArray1);
let result12 = Array.isArray(typeString);

console.log(typeof result11);
console.log(typeof result12);

//Add an item to the end of an 
let addArray = [1,2,3,4,5,6];
let addArrayResult = addArray.push(9);
console.log(addArray);

//Find the index position of d in this array
let positionArray = ['a','b','c','d'];
let positionArrayResult = positionArray.lastIndexOf('d');
console.log(positionArrayResult);


//What will be returned if you look for the index of something that does not exist?

let positionArray1 = ['a','b','c','d'];
let positionArrayResult1 = positionArray1.lastIndexOf('z');
console.log(positionArrayResult1);

//Write a function to check if milk exists in your array.
let items1 = ["milk", "bread", "sugar"];
let resultItem = ((value) => {
    if(items1.indexOf(value) == -1){
        return 'item not exist';
    }else{
        return 'Item available';
        
    }
});
console.log(resultItem('milk'));

//Now you've found milk exists add some code to find the index of milk and remove that item. 
let items2 = ["milk", "bread", "sugar"];
let resultItem1 = ((value) => {
    let removeItem1 = items1.indexOf(value);
    if(removeItem1 == -1){
        return 'item not exist';
    }else{
        items2.splice(removeItem1, 1);
        console.log(items2);
        return 'Item available';
        
    }
});
console.log(resultItem1('milk'));

//List the ways to loop over an array. -

array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
};

//Write some code to put these numbers in order (Ascending & Descending);

//assending Number
var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];
let resultNum = ((value1, value2) => {
    return value1 - value2;
});
console.log(numbers.sort(resultNum));

//Decending Number
var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];
let resultNum1 = ((value1, value2) => {
    if(value1 < value2){
        return 1
    }else if(value1 > value2){
        return -1
    }else {
        return 0
    }
});
console.log(numbers.sort(resultNum1));

//Write some code to place this list in alphabetical order 

var p = ["a", "z", "e", "y"];
let resultP = p.sort();
console.log(resultP);


//What is the length of these arrays 
var arr1 = [, , ,];

var arr2 = new Array(3);

var arr3 = [1, 2, 3, 4, 5];

var array = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(array.length);


//What are the results of these splice and slice methods -

var aList = ["zero", "one", "two", "three"];
var names = ["jason", "john", "peter", "karen"];

var sliced = aList.slice(1, 3);
var spliced = names.splice(1, 3);

console.log(sliced);
console.log(spliced);

console.log(aList);
console.log(names);

//What are the console logs of these shift and unshift methods
var a = [];

// We take an empty array and

a.unshift(1);
a.unshift(22);
var b = console.log(a);
a.shift();
var c = console.log(a);
a.unshift(3, [4, 5]);
var d = console.log(a);
a.shift();
var e = console.log(a);
a.shift();
var f = console.log(a);
a.shift();
var g = console.log(a);

//Using reduce add all these numbers
var numbers = [1, 2, 3, 4, 5, 6];
let resultnum = numbers.reduce((preVal,curVal) => {
    return preVal + curVal;
});
console.log(resultnum);

//Flatten this array to one single array using reduce
var array = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

let myArrayConcat = array.reduce((a,b) => {
    return a.concat(b);
});
console.log(myArrayConcat);

//Filter this array to return just the dogs 
var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
  ];

let resultFilter = animals.filter((value) => {
    return value.species == "dog"
});
console.log(resultFilter);


//Using array in Question 19 use map function to return all the species.
var animals2 = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
  ];

let resultFilter1 = animals2.map((value) => {
    return value.species
});
console.log(resultFilter1);
