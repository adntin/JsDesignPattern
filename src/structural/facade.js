/**
 * 外观模式(门面模式)
 * 将一些复杂操作封装起来，并创建一个简单的接口用于调用。外观模式在JS中常常用于解决浏览器兼容性问题。
 * export {}
 * utils/index.js
 */

// Case 1

function addEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}

const btn = document.getElementById("button");
addEvent(btn, "click", function() {
  console.log("绑定 click 事件");
});

// Case 2

// 购物外观模式
class ShopFacade {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }
  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

// 折扣
class Discount {
  calc(value) {
    return value * 0.9;
  }
}

// 运费
class Shipping {
  calc() {
    return 5;
  }
}

// 服务费
class Fees {
  calc(value) {
    return value * 1.05;
  }
}

export default ShopFacade;
