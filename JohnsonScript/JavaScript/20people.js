//1
//console.log("Hello World");
//2
/*console.log("What's your name?")
let x ="Johnson Nguyen";
console.log("Thank you for showing up " + x);*/
//3
/*let x  = "Johnson";

if(x == "Johnson"){
    console.log(x);
}*/
//4
/*console.log("Please enter a number between 1 and 10")
let userInput = 10;
let outcome = 0;

for( let x = 1; x <= userInput; x++ ){
    outcome = outcome + x;
}

console.log(outcome);*/
//5
/*let userInput = 3;
let outCome = 0;
let change =  userInput % 3;

if(change == 0){
    for( let x = 1; x <= userInput; x++ ){
        outCome = outCome + x;
    }
}

console.log(outCome);*/
//6
/*
for(let i = 1; i <=12; i++) //multiplication table from 1 to 12
{
    for( let x = 1; x <=12; x++){ //multiplication from 1 to 12
    console.log(i*x);
    }
}
*/
//8
/*
let userInput = 11; //placeholder for what the user can input
let sum = 0; //a variable to tell if the numer is a prime number
function primeCal(primeNumber){ //function for checking prime number
    let count = 0;//keeps track if the userinput is divisible only by 1 and itself
 for( let i = 1; i <= primeNumber; i++ ){ //divid the user input by each number from 1 to the user input

     if(primeNumber%i == 0)//condition

     count++; //tracker
 }
   
   return count; //returns the checker result
    
}

sum = primeCal(userInput); //stores the checker values and calls the function

if(sum == 2){ //final condition to print if the user input is a prime number or not

    console.log(userInput + " is a prime number"); 

}
else
{
    console.log(userInput + " is not a prime number");
}
*/
//9
/*
let guess = 0;

let userInput = 4;

let secretAnswer = 4;

console.log("Guess the secret number?!")
function guessingGame(useranswer){
    let tries = 0;
if( userInput == secretAnswer){
    console.log("You are Correct. " + useranswer+ " is the secret number." );
}
else
{
  if(userInput > secretAnswer)
        {
            console.log("Your answer is larger then the secret answer.");
            console.log("You have " + tries + " tries left to guess the correct answer");
            tries = 1;
        }
  else
        {
            console.log("Your answer is smaller then the secret answer.");
            console.log("You have " + tries + " tries left to guess the correct answer");
            tries = 1;

        }
    }
    return tries;
}

guess = guessingGame(userInput);

if(guess == 1)
{
    console.log("You Lose!");
}
else
{
    console.log("You Win!");
}
*/
//11
/*
let x = 20;
let i = 2020;

while(x != 0){
    if ( (0 == i % 4) && (0 != i % 100) || (0 == i % 400) ){
        console.log(i);
     }
    i++;
    x--;
}
*/
//b2
/*
let bigNumbers = [5,2,3,100,7,6,9,20]
let x = 0;

for( let i = 0; i < bigNumbers.length; i++)
{
    if(x < bigNumbers[i]){
        x = bigNumbers[i];
    }
}
console.log(x);
*/
//b3
/*
let bignumbers = [1,2,3,4,5,6]

for(let x = bignumbers.length - 1; x >= 0; x--){
    console.log(bignumbers[x])
}
*/
//b3
/*
let bigNumbers = [1,2,3,4,5,6]
let eLement = 4;

for(let x = 0; x < bigNumbers.length; x++){
    if(eLement == bigNumbers[x])
    console.log(eLement + " is in the list");
}
*/
//b4
/*
let bigNumbers = [1,2,3,4,5,6]

for(let x = 0; x < bigNumbers.length; x++){
    if(x%2 == 0)
    console.log(bigNumbers[x]);
}
*/
//
/*
let bigNumbers = [1,2,3];
let count = bigNumbers.length;
let fin0l = 0;
function f0r(count){
    let s0m = 0;
    for( let i = 0; i < count; i++){
        s0m = s0m + bigNumbers[i];
    }
    return s0m;
}

function wh0le(count){
    let x = 0;
    let s0m = 0;
    while( x < count){
        s0m = s0m + bigNumbers[x];
        x++
    }
    return(s0m);
}

function sum(array, n) {
    if (n === array.length) {
        return 0;
    } else {
        return array[n] + sum(array, n + 1);
    }
}

console.log(f0r(count));
console.log(wh0le(count));
console.log(sum(bigNumbers,0));
*/
/*
let listNumbers = [1,2,3];

function naturalsquare(thisArr4y){

    for(let i = 0; i < thisArr4y.length; i++){

        let y  = thisArr4y[i]

        console.log(y * y)
    }

}

console.log(naturalsquare(listNumbers));
*/
/*
let x = [1,2,3]
let y = [4,5,6]
let z  = [];

for(let i = 0; i <= x.length; i++){
    z.push(x[i]);
}

for(let i = 0; i <= y.length; i++){
    z.push(y[i]);
}

for(let i = 0; i <= z.length; i++){
    console.log(z[i]);
}
8?*/
/*
let numBers = [1,2,3];
let leTTers = ["a","b","c"];
let comBine = [];

let x = 0;

while(x <= numBers.length || x <= leTTers.length){
    if(x <= numBers.length ){
        comBine.push(numBers[x])
    }
    if(x <= leTTers.length ){
        comBine.push(leTTers[x])
    }
    x++;
}

for( let y = 0; y < comBine.length; y++){
    console.log(comBine[y])
}
*/
// O(n) time & O(n) space
/*
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
  
    while (current < (arr1.length + arr2.length)) {
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];
  
        // if next comes from arr1
        if (unmerged1 < unmerged2) {
            merged[current] = unmerged1;
            index1++;
  
        // if next comes from arr2
        } else {
            merged[current] = unmerged2;
            index2++;
        }
  
        current++;
    }
  
    return merged;
  }
  
 let newresult = mergeTwo(arr1, arr2);

 for( let y = 0; y < newresult.length; y++){
    console.log(newresult[y])
 }
*/
/*
let NumBers = [1,2,3,4,5,6]

let x = 0;
let k = 2;

while(x < k ){
let g = NumBers[0]

NumBers.shift();
NumBers.push(g);

x++

}

for( let y = 0; y < NumBers.length; y++){
    console.log(NumBers[y])
 }
 
*/
/*
let numBer = 200;
let outPut =[];

numBer = numBer.toString();

for(let i = 0; i < numBer.length; i++){
    outPut.push(numBer.charAt(i));
}

console.log(outPut);

*/
/*
let numBers = [1,2,3,4,5,6];
let firstNumber = numBers[0];
let secondNumber = numBers[1];
let sum = firstNumber + secondNumber;
numBers.splice(0,1); //(where the number starts, then deletes how many afterwards)
numBers.push(sum);
console.log(numBers);
*/
/*
// Selection sort
let numBers = [1,2,3,7,4,5,6]; 
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;

}
console.log(selectionSort(numBers));
*/
//Insertion Sort
/*
let numBers = [1,2,3,7,4,5,6]; 
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) { //index i = 4
        let key = inputArr[i]; //key = 4
        let j = i - 1; //index J = 3
        while (j >= 0 && inputArr[j] > key) { // 2 >= 0 && 7 > 4
            inputArr[j + 1] = inputArr[j]; // {index 3 + 1 =} index 4 = 7
            j = j - 1; //3 - 1 = 2
        }
        inputArr[j + 1] = key; //{index 2 + 1 = 3} = key so index 3 = 4
    }
    return inputArr; // return array
};
console.log(insertionSort(numBers));
*/
//merge sort alogorithm 
/*
var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));
*/
/*
var itemsf = [1,4,5,6,6,9,2];
console.log(itemsf.sort());

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

*/
/*
function stoogeSort (array, i, j) {
    if (j === undefined) {
        j = array.length - 1;
    }
 
    if (i === undefined) {
        i = 0;
    }
 
    if (array[j] < array[i]) {
        var aux = array[i];
        array[i] = array[j];
        array[j] = aux;
    }
 
    if (j - i > 1) {
        var t = Math.floor((j - i + 1) / 3);
        stoogeSort(array, i, j-t);
        stoogeSort(array, i+t, j);
        stoogeSort(array, i, j-t);
    }
};

arr = [9,1,3,10,13,4,2];
stoogeSort(arr);
console.log(arr);
*/
/*
let nameTr = ["Hello", "By", "Ten", "Stick"];
console.log("*******");

for(let x = 0; x < nameTr.length; x++){
    console.log("*" + nameTr[x] + "*");
}
console.log("*******");
*/
/*
let String1 = "nguyen";
let str =  String1.substring(1); 
let str1 = String1.slice(0,1);

console.log(str + str1 + "ay");
*/

let firstInt = 1;
let finalInt = 9;
let solutionInt = 100;
let progressInt = 0;
let holdInt = 0;
let printString = "";


while( progressInt < 100){
    let randomValue = Math.floor(Math.random() * 100);  
    holdInt = holdInt + randomValue;
    progressInt =  firstInt + holdInt + finalInt;
    printString =  printString + " + " + randomValue;  
}

console.log( firstInt + printString + " + " + finalInt + " = " + progressInt);
