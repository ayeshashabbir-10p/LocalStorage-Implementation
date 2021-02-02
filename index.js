console.log("this is local/session storage");
//use JSON.stringify to store more complex objects
//and JSON.parse to read them.

//Creating Entries
let key = 'Entry_1';
localStorage.setItem(key, 'Value');

//Reading Entries:-
let myItem = localStorage.getItem(key);

//Updating Entries:- 
localStorage.setItem(key, 'New Value');

//Deleting Entries:-
localStorage.removeItem(key);

//Clearing Everything:-
//localStorage.clear();


let myInfo = { name: "Ayesha", age: '23' , language: "Urdu"};
localStorage.setItem('Person', JSON.stringify(myInfo));

let getInfo = JSON.parse(localStorage.getItem('Person'));
console.log(getInfo);