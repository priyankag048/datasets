import Stack from '../src/Stack';

describe('Stack', () => {
  const stack = new Stack(2);
  it('#isEmpty method: should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('#isEmpty method: should return false if stack is data', () => {
    stack.push(4);
    expect(stack.isEmpty()).toBeFalsy();
    stack.emptyStack();
  });

  it('#getSize method: should return the size of stack', () => {
    stack.push(4);
    stack.push(5);
    expect(stack.getSize()).toEqual(2);
    stack.emptyStack();
  });

  it('#push method: should add new value to stack', () => {
    expect(stack.push(7)).toBeTruthy();
    stack.emptyStack();
  });

  it('#push method: should not add new value to stack', () => {
    stack.push(7);
    stack.push(3);
    expect(stack.push(4)).toBeFalsy();
    stack.emptyStack();
  });

  it('#pop method: should remove and return the last value from stack', () => {
    stack.push(7);
    stack.push(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.getSize()).toEqual(1);
    stack.emptyStack();
  });

  it('#pop method: should return null if stack is empty', () => {
    expect(stack.pop()).toBeNull();
  });

  it('#peek method: should return the last value from stack', () => {
    stack.push(7);
    expect(stack.peek()).toEqual(7);
    expect(stack.getSize()).toEqual(1);
    stack.emptyStack();
  });

  it('#peek method: should return null if stack is empty', () => {
    expect(stack.peek()).toBeNull();
  });
  
  it('#emptyStack method: should empty the stack', () => {
    stack.push(7);
    stack.emptyStack()
    expect(stack.getSize()).toEqual(0);
  });

})
