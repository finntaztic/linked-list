
class Node {
  //this is to create a new node
  constructor(value = null, nextNode = null){
    this.value = value;
    this.nextNode = nextNode;
  }
}


class LinkedList {

  //add value to the end of the list
  append(value){
     const newNode = new Node(value);
        newNode.next = head;
        return newNode
  }

  //add value to the head of the list
  prepend(value){
    const newNode = new Node(value);
        newNode.next = head;
        return newNode
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




export { LinkedList }
