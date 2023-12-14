class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pev = null;
    }
}
class doublelinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newnode = new Node(val)
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        var popnode = this.tail
        this.tail = popnode.prev;
        this.tail.next = null;
        popnode.prev = null
        this.length--;
        return popnode
    }

    unshift(val) {
        var newnode = new Node(val)
        if (!this.head) {
            this.head = newnode
            this.tail = newnode
        } else {
            this.head.prev = newnode;
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this
    }

    shift() {
        if (!this.head) return undefined;
        var shiftedhead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            var afternode = shiftedhead.next;
            this.head = afternode;
            afternode.perv = null;
            shiftedhead.next = null;
        }
        this.length--
        return shiftedhead;
    }


    get(index) {
        if (index < 0 || index > this.length) return false
        var count = 0;
        var current = this.head;
        while (count != index) {
            current = current.next;
            count++
        }
        // if (index <= this.length / 2) {

        //     while (count != index) {
        //         current = current.next;
        //         count++;
        //     }
        // } else {
        //     count = this.length - 1
        //     current = this.tail;
        //     while (count != index) {
        //         current = current.prev;
        //         count--;
        //     }
        // }
        return current;
    }

    set(val, index) {

        var updatednode = this.get(index)
        if (updatednode) {
            updatednode.val = val;
            return true
        }
        return false
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) {
            this.unshift()
            return true
        }
        if (index === length) {
            this.push()
            return true;
        }
        var newnode = new Node(val)
        var beforenode = this.get(index - 1);
        var afternode = beforenode.next
        beforenode.next = newnode;
        newnode.prev = beforenode
        newnode.next = afternode
        afternode.prev = newnode
        this.length++;
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) {
            this.shift()
            return true
        }
        if (index === this.length) {
            this.pop()
            return true
        }
        var removelnode = this.get(index)
        var afternode = removelnode.next;
        var before = removelnode.prev;
        before.next = afternode;
        afternode.prev = before;
        removelnode.next = null;
        removelnode.perv = null;
        this.length--;
        return removelnode;
    }

    print() {
        var result = [];
        var current = this.head
        while (current) {
            result.push(current.val)
            current = current.next
        }
        console.log(result)
    }


}

var list = new doublelinkedlist()
list.push('3')
list.push('fffff')
list.push('1')
list.push('2')
list.push('4')
list.print()
list.pop(2)
list.print()
list.set('vvv', 1)
list.print()




