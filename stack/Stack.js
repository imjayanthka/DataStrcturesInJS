class Stack {
  constructor() {
    //   Underscore is used as internal property
    this._storage = {};
    this._count = 0;
  }

  pop() {
    if (this._count === 0) return null;
    this._count = this._count - 1;
    return this._storage[this._count];
  }

  push(value) {
    this._storage[this._count] = value;
    this._count = this._count + 1;
  }

  peek() {
    return this._storage[this._count - 1]
      ? this._storage[this._count - 1]
      : null;
  }
}

module.exports = Stack;
