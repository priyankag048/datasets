'use strict';

class Stack<T> {
	maxLength: number;
	arr: Array<T>;

	/**
   * @param { number } max 
  */
	constructor(max: number) {
		this.maxLength = max; // define a max length, maximum size of Stack
		this.arr = [];
	}

  /**
   * @returns { boolean } check if stack is empty
  */
	isEmpty(): boolean {
		return this.arr.length === 0;
	}

	/**
   *  @returns { number } length of stack
  */
	getSize(): number {
		return this.arr.length;
	}

	/**
  * @param { number } value
  * @returns { boolean } 
  */
	push(value: T): boolean {
		const arrSize = this.getSize();
		if (arrSize >= this.maxLength) {
			return false;
		}
		this.arr.push(value);
		return true;
	}

	/**
   * @returns { number | Object } deletes the last value and returns the same
  */
	pop(): T | Object {
		if (this.isEmpty()) {
			return null;
		}
		return this.arr.pop();
	}

	/**
   * @returns { number | Object } returns the last value
  */
	peek(): T | Object {
		if (this.isEmpty()) {
			return null;
		}
		return this.arr[this.arr.length - 1];
	}

	/**
   * empty the stack array
  */
	emptyStack(): void {
		this.arr = [];
	}
}

export { Stack }
