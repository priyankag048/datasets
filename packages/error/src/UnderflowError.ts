'use strict';

import Error from './Error';
export default class UnderflowError extends Error {
  constructor(type:string) {
    super(`${type} Underflow: ${type} is empty`);
  }
}

export { UnderflowError };
