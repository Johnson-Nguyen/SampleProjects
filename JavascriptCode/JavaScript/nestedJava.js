/*const dig = (obj, target) =>
target in obj
?obj[target]
:Object.values(obj).reduce((acc, val) => {
    if(acc != undefined) return acc;
    if(typeof val === 'object') return dig(val, target);
}, undefined);

const data = { 
    level1: {
        level2: {
            level3:'some data'
        }
    }
};

const dog = {
    "status": "success",
    "message": "https:www.google.com"
}

console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));
*/

/*const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
data
    .slice(omitFirstRow? data.indexod('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

    console.log(csv_to_array('a,b\nc,d'));
    console.log(csv_to_array('a;b\nc;d',';'));
    console.log(csv_to_array('head1,head2\nc,d',',',true));
    */

   /* const digitize = n => [...'${n}'].map(i => parseInt(i));
    console.log(digitize(123));
    console.log(digitize(1230));*/

    const powerset = arr => arr.reduce((a,v) => a.concat(a.map(r => [v].concat(r))), [[]]);
    console.log(powerset[1,2]);
    console.log(powerset([1,2,3]));
    console.log(powerset([1,2,3,4]));

