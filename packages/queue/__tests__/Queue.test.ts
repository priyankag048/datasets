import {Queue} from '../src/Queue';

describe('Queue', () => {
  const queue = new Queue(2);
  it('#isEmpty method: should return true if queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('#isEmpty method: should return false if queue has data', () => {
    queue.enqueue(4);
    expect(queue.isEmpty()).toBeFalsy();
    queue.emptyQueue();
  });

  it('#getSize method: should return the size of queue', () => {
    queue.enqueue("car");
    queue.enqueue("bus");
    expect(queue.getSize()).toEqual(2);
    queue.emptyQueue();
  });

  it('#enqueue method: should append a new value to queue', () => {
    expect(queue.enqueue(7)).toBeTruthy();
    queue.emptyQueue();
  });

  it('#enqueue method: should not append a new value to queue', () => {
    queue.enqueue(7);
    queue.enqueue(3);
    expect(queue.enqueue(4)).toBeFalsy();
    queue.emptyQueue();
  });

  it('#dequeue method: should remove and return the first value from queue', () => {
    queue.enqueue(7);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(7);
    expect(queue.getSize()).toEqual(1);
    queue.emptyQueue();
  });

  it('#dequeue method: should return null if queue is empty', () => {
    expect(queue.dequeue()).toBeNull();
  });

  it('#peek method: should return the first value from queue', () => {
    queue.enqueue(7);
    queue.enqueue(5);
    expect(queue.peek()).toEqual(7);
    expect(queue.getSize()).toEqual(2);
    queue.emptyQueue();
  });

  it('#peek method: should return null if queue is empty', () => {
    expect(queue.peek()).toBeNull();
  });
  
  it('#emptyqueue method: should empty the queue', () => {
    queue.enqueue(7);
    queue.emptyQueue();
    expect(queue.getSize()).toEqual(0);
  });
});
