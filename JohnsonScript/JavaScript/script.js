var jcontent = {
    "firstName": "Johnson",
    "lastName": "Smith"
}
var x =0;
var output = document.getElementById('output'); 
var headerOne = document.getElementById('headerOne');


for( var i = 0; i < 30; i++)
{
    x = x + i;
}

function testFun(){
  console.log("POWERFUL!");
}

function testAdd(){
  if( x < 10)
  {
    console.log("X is less than 10");
  }
  else
  {
    console.log("X is greater than 10")
  }
}

headerOne.innerHTML = x;//output needs to be defined within the html and innerhtml is for setting a value to the html

