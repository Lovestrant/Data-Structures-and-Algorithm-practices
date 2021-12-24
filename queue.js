/*Creating a queue */

var Queue = function() {
    var collection = [];
    
    //enqueue
    this.enqueue = function(element) {
        return collection.push(element);
    }

    //dequeue front

    this.dequeueFront = function() {
        return collection.shift(0);
    }
        //dequeue end

        this.dequeueEnd = function() {
            return collection.splice(collection.length-1);
        }
    //rear
    this.rear = function() {
        return collection[collection.length-1];
    }
    //front

    this.front = function() {
        return collection[0];
    }
    //check if isEmpty
    this.isEmpty = function() {
       if(collection.length === 0) {
           console.log("Queue is empty");
       }else{
        console.log("Queue Not empty");  
       }
    }
    this.printQueue = function() {
        return collection;
    }
}

var myQueue = new Queue();

//check if queue is empty
console.log(myQueue.isEmpty());
//Enqueue the queue
myQueue.enqueue("PHP");
myQueue.enqueue("JAVASCRIPT");
myQueue.enqueue("HTML");
myQueue.enqueue("CSS");
myQueue.enqueue("BootStrap");

//check if queue is still empty
console.log(myQueue.isEmpty());
//print queue elements
console.log(myQueue.printQueue());

//check front
console.log("front is "+myQueue.front());
//check rear
console.log("rear is " +myQueue.rear());

//dequeue front
myQueue.dequeueFront();
//check front
console.log("New front is " +myQueue.front());
//print queue elements
console.log(myQueue.printQueue());
//dequeue rear
myQueue.dequeueEnd();
//print queue elements
console.log(myQueue.printQueue());


