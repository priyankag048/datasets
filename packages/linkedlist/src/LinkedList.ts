'use strict';

import NodeType from './node.interface';
import Node from './Node';
class LinkedList<T>{
  head: NodeType<T>;
  size: number;

  constructor(){
    this.head = null;
    this.size = 0;
  }

  toArray(): Array<T> {
    let nodes = [];
    if(this.head !== null) {
      let currentNode = this.head;
      nodes.push(currentNode.data);
      while(currentNode.next !== null){
        currentNode = currentNode.next;
        nodes.push(currentNode.data);
      }
    }
    return nodes;
  }

  appendNode(value: T): boolean {
    const node = new Node<T>(value);
    if(this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
    return true;
  }

  prependNode(value: T): boolean {
    const node = new Node<T>(value);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return true;
  }

  addNode(value: T, index:number): boolean {
    let nodeIndex = 0;
    const node = new Node<T>(value);
    if(this.head === null && index !== 0) {
      return false;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return true;
    } else {
      let currentNode = this.head;
      let isValid;
      while(currentNode.next !== null) {
        if(index === nodeIndex+1) {
          isValid = true;
          break;
        } else {
          isValid = false;
        }
        currentNode = currentNode.next;
        nodeIndex++;
      }
      if(isValid){
        node.next = currentNode.next;
        currentNode.next = node;
        this.size++;
      }
      return isValid;
    }
  }

  find(value:T): Object | NodeType<T> {
    if (this.head === null){
      return null;
    }
    let node = null;
    let currentNode = this.head;
    while(currentNode.next !== null) {
      if(currentNode.data === value) {
        node = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return node;
  }
  
  deleteHead<T>(): NodeType<T> | Object {
    if(this.head === null) {
      return null;
    } else {
      const deletedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return deletedNode;
    }
  }

  deleteTail<T>(): NodeType<T> | Object {
    if(this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      while(currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      const deletedNode = currentNode.next;
      currentNode.next = null;
      this.size--;
      return deletedNode;
    }
  }

  deleteNode(value: T): NodeType<T> | Object {
    let isValid = false;
    if(this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      while(currentNode.next.next !== null) {
        if(currentNode.next.data === value) {
          isValid =true;
          break;
        }
        currentNode = currentNode.next;
      }
      if(isValid){
        const deletedNode = currentNode.next;
        currentNode.next = null;
        this.size--;
        return deletedNode;
      }
      return null;
    }
  }

  emptyList() {
    this.head = null;
    this.size = 0;
  }

}

export { LinkedList };
