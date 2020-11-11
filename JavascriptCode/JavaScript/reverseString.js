/* function string_reverse(str)
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript")); */

function string_reverse(str){

}
function LetterChange3(text){
    var s = text.split('');
for(var i = 0; i < s.length; i++){
    switch(s[i]){
        case '':
        break;
        case 'z':
            s[i] = 'a';
            break;
            case 'Z':
                s[i]='A';
                break;
                default:
                    s[i] = String.fromCharCode( 1 + s[i].charCodeAt(0));
    }


    switch(s[i]){
        case 'a': case 'e': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
    }
}
return s.join('');
}

console.log(LetterChange3("PYTHON"));
console.log(LetterChange3("W3R"));
console.log(LetterChange3("php"));