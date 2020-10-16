function difference(n)
{
    if(n <=13)
        return 13 - n;
    else
        return (n -13) * 2;
}
console.log(difference(32))
console.log(difference(11))

function last_digit(x,y,z)
{
    if ((x > 0) && y > 0 && z > 0)
    {
        return ( x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }
    else
    {
        return false;
    }
}

console.log(last_digit(20,30,400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20,-30,400));
console.log(last_digit(20,30,-400));