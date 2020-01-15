'use strict';

import NodeType from './node.interface';

export default class Node<T> {
  data: T;
  next:NodeType<T>; 
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
