/**
 * 解释器模式
 */

// 加法
class Plus {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

// 减法
class Minus {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

// 数字
class Num {
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}

// export { Num, Minus, Plus };

const plus = new Plus(new Num(1), new Num(2));
console.log(plus.interpret());

const minus = new Minus(new Num(2), new Num(1));
console.log(minus.interpret());
