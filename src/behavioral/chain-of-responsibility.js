/**
 * 职责链模式
 * 职责链模式是一个对象A向另一个对象B发起请求，如果B不处理，可以把请求转给C，如果C不处理，又可以把请求转给D。
 * 打个比方，客户让老板写个php程序。
 * 老板肯定不写，然后老板交给了部门经理。
 * 部门经理不愿意写，又交给项目经理。
 * 项目经理不会写，又交给程序员。
 * 最后由码农来完成。
 */

// 购物车
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(p) {
    this.products.push(p);
  }
}

// 折扣类
class Discount {
  calc(products) {
    let numberDiscount = new NumberDiscount();
    let priceDiscount = new PriceDiscount();
    let noneDiscount = new NoneDiscount();
    numberDiscount.setNext(priceDiscount);
    priceDiscount.setNext(noneDiscount);
    return numberDiscount.exec(products);
  }
}

// 数量折扣
class NumberDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    if (products.length > 3) {
      result = 0.05; // 数量大于3, 打9.5折
    }
    return result + this.next.exec(products);
  }
}

// 价格折扣
class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    let total = products.reduce((a, b) => a + b);
    if (total >= 500) {
      result = 0.1; // 价格大于500, 打9折
    }
    return result + this.next.exec(products);
  }
}

// 没有折扣
class NoneDiscount {
  exec() {
    return 0;
  }
}

// export { ShoppingCart, Discount };

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(100);
shoppingCart.addProduct(200);
shoppingCart.addProduct(300);
shoppingCart.addProduct(400);
shoppingCart.addProduct(500);
const discount = new Discount();
const d = discount.calc(shoppingCart.products);
console.log(1 - d.toFixed(2));
