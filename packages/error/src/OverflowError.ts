'use strict';

import Error from './Error';
class OverflowError extends Error {
  constructor(type: string, maxsize: number) {
    super(`${type} Overflow: Max limit: ${maxsize}`);
  }
}

export { OverflowError };
