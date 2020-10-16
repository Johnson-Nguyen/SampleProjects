class Node{
    constructor(val){
        this.val = val;
        this.next = null;

    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    //push - add node to top
    push(val){
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
    }
    //pop - removes top node, and returns the val
    pop(){
        if(this.isEmtpy())throw Error("Stack is Empty");        
        //store references/val
        const deadNode = this.top;
        const val = deadNode.val;

        //exchange .top
        this.top = deadNode.next;

        //handle removal/reutn of val
        deadNode.next = null;
        return val;
    }
    //isEmpty - returns true if stack is empty
    isEmtpy(){
        return this.top == null;
    }
    //peek - returns top value
    peek(){
        return this.top ? this.top.val : this.top;
    }
}

stack = new Stack;
console.log(stack.top);