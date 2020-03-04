import {LinkedList} from '../src/LinkedList';

describe('LinkedList', () => {
  const linkedList = new LinkedList();
  it('#toArray method: should return an array of elements, which equals the data of each linked list node', () => {
    linkedList.appendNode(5);
    expect(linkedList.toArray()).toEqual([5]);
    linkedList.emptyList();
  });

  it('#toArray method: should return an empty array if the linked list is empty', () => {
    expect(linkedList.toArray()).toEqual([]);
  });

  it('#appendNode method: should append node to linked list if linkedList is empty', () => {
    linkedList.appendNode(5);
    expect(linkedList.size).toEqual(1);
    expect(linkedList.toArray()).toEqual([5]);
    linkedList.emptyList();
  });

  it('#appendNode method: should append node to linked list if linkelist is not empty', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    linkedList.appendNode(9);
    expect(linkedList.size).toEqual(3);
    expect(linkedList.toArray()).toEqual([5,7,9]);
    linkedList.emptyList();
  });

  it('#prependNode method: should prepend node to linked list if linkelist is empty', () => {
    linkedList.prependNode(5);
    expect(linkedList.size).toEqual(1);
    expect(linkedList.toArray()).toEqual([5]);
    linkedList.emptyList();
  });

  it('#prependNode method: should prepend node to linked list if linkelist is not empty', () => {
    linkedList.prependNode(5);
    linkedList.prependNode(7);
    linkedList.prependNode(9);
    expect(linkedList.size).toEqual(3);
    expect(linkedList.toArray()).toEqual([9,7,5]);
    linkedList.emptyList();
  });

  it('#addNode method: should not add node if index !=0 and header is null', () => {
    const result = linkedList.addNode(3, 7);
    expect(result).toBeFalsy();
    linkedList.emptyList();
  });

  it('#addNode method: should not add node if index is invalid', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(8);
    const result = linkedList.addNode(3, 7);
    expect(result).toBeFalsy();
    linkedList.emptyList();
  });

  it('#addNode method: should prepend node if index = 0', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    const result = linkedList.addNode(3, 0);
    expect(linkedList.size).toEqual(3);
    expect(linkedList.toArray()).toEqual([3,5,7]);
    expect(result).toBeTruthy();
    linkedList.emptyList();
  });

  it('#addNode method: should add node if index is proper', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    const result = linkedList.addNode(3, 1);
    expect(linkedList.size).toEqual(3);
    expect(linkedList.toArray()).toEqual([5,3,7]);
    expect(result).toBeTruthy();
    linkedList.emptyList();
  });

  it('#find method: should find a node based on value', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    linkedList.appendNode(9);
    linkedList.addNode(15, 2);
    const result = linkedList.find(15);
    expect(result).toEqual({data:15, next: { data: 9, next: null}});
    linkedList.emptyList();
  });

  it('#find method: should return null for invalid value', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    linkedList.appendNode(9);
    const result = linkedList.find(10);
    expect(result).toBeNull();
    linkedList.emptyList();
  });

  it('#find method: should return null if linkedlist is empty', () => {
    const result = linkedList.find(10);
    expect(result).toBeNull();
  });

  it('#deleteHead method: should delete the node from head and return the deleted node', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    const deletedNode = linkedList.deleteHead();
    expect(deletedNode['data']).toEqual(5);
    expect(linkedList.size).toEqual(1);
    linkedList.emptyList();
  });

  it('#deleteHead method: should return null if linkedlist is empty', () => {
    const deletedNode = linkedList.deleteHead();
    expect(deletedNode).toBeNull();
  });

  it('#deleteTail method: should delete the node from tail and return the deleted node', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    linkedList.appendNode(2);
    linkedList.prependNode(1);
    const deletedNode = linkedList.deleteTail();
    expect(deletedNode['data']).toEqual(2);
    expect(linkedList.size).toEqual(3);
    linkedList.emptyList();
  });

  it('#deleteTail method: should return null if linkedlist is empty', () => {
    const deletedNode = linkedList.deleteTail();
    expect(deletedNode).toBeNull();
  });

  it('#deleteNode method: should delete the node and return the deleted node', () => {
    linkedList.appendNode(5);
    linkedList.appendNode(7);
    linkedList.appendNode(2);
    linkedList.prependNode(1);
    linkedList.prependNode(3);
    const deletedNode = linkedList.deleteNode(7);
    expect(deletedNode['data']).toEqual(7);
    expect(linkedList.size).toEqual(4);
    linkedList.emptyList();
  });

  it('#deleteNode method: should return null if value is invalid', () => {
    linkedList.appendNode(8);
    linkedList.appendNode(7);
    linkedList.appendNode(2);
    linkedList.prependNode(1);
    const deletedNode = linkedList.deleteNode(5);
    expect(deletedNode).toBeNull();
    expect(linkedList.size).toEqual(4);
    linkedList.emptyList();
  });

  it('#deleteNode method: should return null if linkedlist is empty', () => {
    const deletedNode = linkedList.deleteNode(5);
    expect(deletedNode).toBeNull();
  });

  it('#emptyList: empty list', () => {
    linkedList.appendNode(8);
    linkedList.appendNode(7);
    linkedList.appendNode(2);
    linkedList.prependNode(1);
    linkedList.emptyList();
    expect(linkedList.size).toEqual(0);
  })
});
