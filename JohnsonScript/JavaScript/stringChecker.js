function string_check(str1){
    if(str1 === null || str1 ===undefined || str1.substring(0,2) === 'Py')
    {
        return str1;
    }
    return "Py" + str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

function check_char(str, char)
{
    ctr = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i) == char){
            ctr++;
        }
    }
    return (ctr >= 2 && ctr <= 4);
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript","a"));
console.log(check_char("Console","o"));