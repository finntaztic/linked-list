console.log('index.js started');

class LinkedList {

  //add value to the head of the list
  append(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
console.log('hello');

  }

  
  prepend(value){

  }

  size(){

  }

  head(){

  }

  tail(){

  }

  at(index){

  }

  pop(){

  }

  contains(value){

  }

  find(value){

  }

  toString(){

  }
}

class Node {

  //this is to create a new node
  constructor(value){
    this.value = null;
    this.nextNode = null;
  }
}


export { LinkedList }
