/*
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

//let user = users.find(item => item.id == 3);
let user = users.filter(item => item.id < 1);
console.log (user.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

function compareNumeric(a, b) {
    return a - b;
  }
  
  let arr = [ 1, 2, 15, 34, -7, 7 ];
  
 // arr.sort(compareNumeric);
 arr.sort( (a, b) => a - b );
 
 console.log(arr); 

 function camelize(str = ''){
     let arr = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)); 
     return arr.join('');

 }
 console.log(camelize("-webkit-transition-sdfsdf"));

 function filterRange (arr =[], a = 0,b = 0){
  

 let arr1 = (arr.filter(element => (element >= a && element <= b)));

    return arr1 ;
}
 let arr22 = [5, 3, 8, 1];

let filtered = filterRange(arr22, 1, 4);

console.log ( filtered );

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
  });

function copySorted(arr =[]){
return arr.slice().sort();

}

let arr123 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr123);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr123 ); // HTML, JavaScript, CSS (без изменений)

let arr3 = [5, 2, 1, -10, 8];

arr3.sort( (a, b) => b - a );

console.log( arr3 ); // 8, 5, 2, 1, -10

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users1 = [ vasya, petya, masha ];

let names = users1.map (item => item.name);

console.log( names ); // Вася, Петя, Маша
*/
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullname : `${user.name} ${user.surname}`,
    id : user.id 
    }));

     let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullname ) // Вася Пупкин*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
function sortByAge(arr) {
  
arr.sort((a, b) => a.age - b.age);

}
sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr); // Петя

