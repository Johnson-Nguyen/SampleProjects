let johnsonNguyen = "fireflies";

let x = 3; 

if( x < 10)
{
    //console.log("Less than 10");
}
else
{
    //console.log("Change X to a number les than 10");
}

//This is the journey 

let johnsonString = "Johnson Nguyen"; //declaration of variable being tested
let subJohn = johnsonString.substring(6); //testing substrings

let subJOhn = johnsonString.charAt(6); //testing charAt

let johnsArray = ["johnson", "nguyen", "soul"];

//console.log(subJOhn); //prints result for string/char

let functionTester = function showMessage(){
    console.log("Johnson Nguyen");
    let x = 1;

    if( x < 2)
    {
        console.log("is cool");
    }

}

let johnsonArray = ["Johnson", "Bob" , "Gill"]; //I got arrays to work
johnsonArray.push("Yang"); //I add to the end of the array
johnsonArray.pop();//Remove from the end
johnsonArray.shift();//Remove from the front
johnsonArray.unshift("FreedomaBucks")//add to the beginning of an array
let johnsonIndex = johnsonArray.indexOf("Gill");
johnsonArray.splice(0,1); //0 is the starting position and 1 is the element you want to remove
console.log(johnsonIndex);

for( let i = 0; i < johnsonArray.length;i++){

    console.log(johnsonArray[i]);

}

//functionTester();

//console.log(johnsArray[0]);//prints array result

