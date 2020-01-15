'use strict';

export default class Queue<T>{
  maxLength: number;
  arr: Array<T>;
  
  /**
   * @param { number } max 
  */
  constructor(max: number){
    this.maxLength = max; // define a max length, maximum size of queue
    this.arr = [];
  }

  /**
   * @returns { boolean } check if queue is empty
  */
  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  /**
   *  @returns { number } length of queue
  */
  getSize(): number {
		return this.arr.length;
	}

  /**
   * @param { number } value
   * @returns { boolean } 
  */
  enqueue(value: T): boolean {
    const arrSize = this.getSize();
		if (arrSize >= this.maxLength) {
			return false;
		}
		this.arr.push(value);
		return true;
  }

  /**
   * @returns { number | Object } deletes the first value and returns the same
  */
  dequeue(): T | Object {
    if (this.isEmpty()) {
			return null;
		}
		return this.arr.shift();
  }

  /**
   * @returns { number | Object } returns the first value
  */
  peek(): T | Object {
		if (this.isEmpty()) {
			return null;
		}
		return this.arr[0];
  }
  
  /**
   * empty the queue array
  */
  emptyQueue(){
		this.arr = [];
	}
}
