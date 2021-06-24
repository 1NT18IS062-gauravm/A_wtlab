class Queue {
    constructor() {
        this.items = [];
    }
    
    
    enqueue(element) {
        return this.items.push(element);
    }
    
    dequeue() {
        if(this.items.length > 0) 
        {
            return this.items.shift();
        }
        else
        console.log('queue empty')
    }
    
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

console.log(queue.items);

queue.dequeue();
console.log(queue.items);
console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);