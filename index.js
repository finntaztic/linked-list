
class Node {
  //this is to create a new node
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  //add value to the end of the list
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
    let newNode = new Node(value);
    newNode.next = this.head; //this points the new node to existing head next
    this.head = newNode; //this makes the new node the head of the list
  }

  size(){
    let count = 0;
    let current = this.head;

    while (current){
      count++
      current = current.next;
    }
    return count;
  }

  headNode(){
    let current = this.head;
    return current;
  }

  tailNode(){
    let current = this.head;

    while (current.next){
      current = current.next; 
    }

    return current.value;
    }


  at(index){
    let counter = 1;
    let current = this.head;

    while(index !== counter){
      current = current.next;
      counter++
    } return current.value
  }

  //this part maybe make the second to the last element equals to null? 

  pop(){
    let current = this.head

    while(current.next.next !== null){
      current = current.next
    }
    return current.next = null; //current points to 2nd to the last node, then we put null to its next node value
  }

  toString(){
    let current = this.head
    let result = "";
    while(current){ //current.value !== 'empty'
        result += current.value + '->'
        current = current.next
    } 
    return result + 'null'
  }

  //returns true if the passed in value is in the list and otherwise returns false.

  contains(string){
    let current = this.head;

    while (current.value != string && current.next != null){ //without the current.next != null, the current.value becomes an error cos it cant interpret the null
      current = current.next;
    } 
    if (current.value != string){
        return false
      } 
    return true
  }


  //find(value) returns the index of the node containing value, or null if not found.

  find(value){
    let current = this.head;

    while (current.value != value && current.next != null){
      current = current.next
    }
    if (current.value != value){
      return null;
    }
    else return current.value;
  }


  
  }



export { LinkedList }
