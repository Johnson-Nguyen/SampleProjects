function LinkedList(){
 this.head = null;
}

// Checks if the there are no nodes in the linkedlist
LinkedList.prototype.isEmpty = function(){
    return this.head === null;
};

//Checks the size of the list
LinkedList.prototype.size = function(){
    var current = this.head;
    var count = 0;

    while(current !== null){
        count++;
        current = current.next;
    }

    return count;
};

//add a node to the beginning of the list
// 1.create a new node with val
// 2.Make the new node point to the current head
// 3.Update this.head to point to the new node
LinkedList.prototype.prepend = function(val){
    var newNode = {
        data: val,
        next: this.head
    };

    this.head = newNode;
};

//add a node to the end of the list
// 1.Create a new Node using vale
// 2.Traverse to th end of the list
// 3. make the last node's next value point to the new node
LinkedList.prototype.append = function(val){
var newNode = {
    data: val,
    next: null
};

if(this.isEmpty()){
    this.head = new Node;
    return;
}

var current = this.head;

while (current.next !== null){
    current = current.next;
    }

    current.next = newNode;
};
LinkedList.prototype.contains = function(val){
    var current = this.head;

    while(current !== null){
        if(current.val === val){
            return true;
        }
        current = current.next;
    }

    return false;
}

LinkedList.prototype.remove = function(val){
    if(!this.contains(val)){
    return;
}

if(this.head.data === val){
    this.head = this.head.next;
}

 var prev = null;
 var curr = this.head;

 while(curr.data !== val){
     prev = curr;
     curr = curr.next;
 }

 prev.next = curr.next;

};

LinkedList.prototype.print = function(){
    var output ='[';
    var current = this.head;

    while(current !== null){
        output += current.data;
        if(current.next !== null){
            output += ',';
        }
    }
    output += ']';
    console.log(output);
};

var list = new LinkedList();
list.print();
/*
var list = new LinkedList();
list.append(10);
*/
/*
var List = new LinkedList();
List.prepend(10);
List.prepend(5);

console.log(List);
*/