function hashStringToint(s, tableSize){
    let hash = 17;

    for(let i = 0; i< s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
   

    return hash;
}
class HashTable{

    table = new Array(100)
    numItems = 0;
    loadFactor = this.numItems / this.table.length

    setItem = (key, value) => {
        this.numItems++;
        const idx = hashStringToint(key, this.table.length)
        if(this.table[idx]){
            this.table[idx].push([key, value]);
        }
        else{
            this.table[idx] = [[key, value]];
        }
    };

    getItem = (key) => {
        const idx = hashStringToint(key, this.table.length);
        if(!this.table[idx]){
            return null;
        }
        return this.table[idx].find(x => x[0] === key);
    };
}

const myTable = new HashTable();
myTable.setItem("FirstName","bob");
myTable.getItem("firstName");
console.log(myTable);
