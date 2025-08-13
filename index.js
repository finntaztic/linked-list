
class Node {
  //this is to create a new node
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  //add value to the end of the list
  constructor(){
    this.head=null
  }

  append(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head
    while (current.next){
      current = current.next
      }
      current.next = newNode;
    }

  //adds a new node containing value to the start of the list
  prepend(value){
    
  }
  toString(){
    let current = this.head
    let result = ""
    while(current){
      result += current.value + '->'
      current = current.next
    }
    return result + 'null'
  }


  // add value to the head of the list
  // prepend(value){
  //   const newNode = new Node(value);
  //       newNode.next = head;
  //       return newNode
  // }

  // size(){

  // }

  // head(){

  // }

  // tail(){

  // }

  // at(index){

  // }

  // pop(){

  // }

  // contains(value){

  // }

  // find(value){

  // }

  // toString(){

  // }
}




export { LinkedList }
