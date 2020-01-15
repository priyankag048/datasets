'use strict';

export default interface NodeType<T> {
  data: T;
  next: NodeType<T>;
}
