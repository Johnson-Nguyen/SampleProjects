
function showMessage() {
    console.log(' in a funtion');
}

showMessage();
showMessage();


//

function showMessage(){

}

let fn = function(){

}

fn(); //calls the function

//

function showMessage(message){ //The message in this function is called a paramater
    console.log(message)
}
showMessage('First Message'); //value being push to the function is the argument

function getSecretCode(value){
    let code = value * 42;
    return code;
}

console.log(getSecretCode(2));

//Objects
let person = {
    name: "John",
    age: 32,
    partTtime: false
};

console.log(person.name);
console.log(person.age);
console.log(person.partTime);

//Array
let values = [1,2,3];
let value = Array.of(1,2,3);

console.log(values[0]);

values.push("bill"); //add stuff to the array

values.pop(); //removes the last item in an array

