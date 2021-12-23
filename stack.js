//Getting started with Data structures practical exercise
//Stack

// var myStack = [];
// var word = "daddaddad";
// var reverse = "";

// for(i = 0; i< word.length; i++) {
//   myStack.push(word[i]);
  
// }

// for(i= 0 ; i< word.length; i++) {
//    reverse += myStack.pop();
// }

// if(reverse === word) {
//   console.log(word + " is a palindrome");
// }else {
//   console.log(word + " is not a palindrome");
// }
// console.log(word);
// console.log(reverse);

var Stack = function() {
  this.count = 0;
  this.storage = {};

  //Add value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //pop value from the stack
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }

      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;

  }
        //return stack size
  this.size = function() {
          return this.count;
        }

  this.peek = function() {
    let peek = this.storage[this.count-1];
    return peek;
  }

}

var myStack = new Stack();
//pushing content to stack
myStack.push("James");
myStack.push("collins");
myStack.push("kiprop");
myStack.push("Elijah");

console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());


