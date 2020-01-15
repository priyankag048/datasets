import Node from '../src/Node';

describe('Linled List Node', () => {
  it('should create a node', () => {
    const node = new Node(6, null);
    expect(node.data).toEqual(6);
    expect(node.next).toBeNull();
  });
})
