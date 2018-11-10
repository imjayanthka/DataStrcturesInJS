class Stack {
  constructor() {
    //   Underscore is used as internal property
    this._storage = {};
    this._count = 0;
  }

  pop() {
    if (this._count === 0) return undefined;
    this._count = this._count - 1;
    const lastVal = this._storage[this._count];
    delete this._storage[this._count];
    return lastVal;
  }

  push(value) {
    this._storage[this._count] = value;
    this._count = this._count + 1;
  }

  peek() {
    return this._storage[this._count - 1]
      ? this._storage[this._count - 1]
      : undefined;
  }
}

module.exports = Stack;
