class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlelinklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
       
        this.length++;
        console.log(this.length);

        return this;
    }
    // remove the tail in one 
    pop() {
        if (!this.head) return 'undefind';
        var current = this.head;
        var newtail = current;
        while (current.next) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // remove head
    shift() {
        if (!this.head) return 'undefind'
        var currenthead = this.head;
        this.head = currenthead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currenthead;
    }

    //add new head
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    ///get the value
    get(index) {
        if (index < 1 || index > this.length){
            console.log("error")
         return false
        }
        var count = 1;
        var current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        console.log('value is :',current.val)
        return current;

    }

    //set the value the specific position
    set(index, value) {
        var updateposition = this.get(index)
        if (updateposition) {
            updateposition.val = value;
            return true;
        }
        return false;
    }

    //insert the new node
    insert(index, value) {
        if (index < 1 || index > this.length){
            console.log("error")
         return false
        }
        if (index === 1) {
            this.unshift();
            return true;
        }
        if (index === this.length ) {
            this.push();
            return true;
        }
        var newnode = new Node(value)
        var currentNode = this.get(index);
        var temp = currentNode.next;
        currentNode.next = newnode;
        newnode.next = temp;
        this.length++;
        return true;
    }

    //remove
    remove(index) {
        if (index < 1 || index > this.length){
            console.log("error")
         return false
        }
        if (index === 1) {
            this.shift()
            return true;
        }
        if (index === this.length) {
            this.pop()
            return true
        }
        var currentnode = this.get(index )
        var removelnode = currentnode.next;
        currentnode.next = removelnode.next;
        this.length--
        return currentnode
    }

    //revers
    reverse() {
        var node = this.head
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    //removeduplicate  in  sorted list
    removeduplicate() {
        var current = this.head;
        while (current) {
            if (current.next !== null && current.val === current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next
            }
        }
        return this.head;

    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }

}


var list = new singlelinklist()




// const val1=list.get(1)


list.push('3')
list.push('fffff')
list.push('1')
list.push('2')
list.push('4')

list.print()
list.get(5)
list.remove(1)

list.print()
list.remove(0)
