class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

class single{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }

    push(val){
        var newnode=new Node(val)
        if(!this.head){
            this.head=newnode
            this.tail=newnode
        }
        this.tail.next=newnode
        this.tail=newnode
        this.length++
        return this
    }

get(index){
    let count=0
    let current= this.head
    while(count!=index){
        current=current.next;
        count++
    }
    return current
}

remove(){
    var current=this.get((Math.floor(this.length/2))-1)
current.next=current.next.next
return current
}


    print(){
        var arr=[]
        var current=this.head;
        while(current){
            arr.push(current.val)
           current= current.next;
        }
        console.log(arr);
        return arr
    }
}

var list= new single()
list.push(222)
list.push(2)
list.push(5)
list.push(6)
list.push(88)
list.print()
list.remove(6)
list.print()