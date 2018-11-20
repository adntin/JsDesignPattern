/**
 * 策略模式
 * Network request strategy use http or socket
 */

// Case 1 linear(匀速)和cubic(三次方缓动)就是一种策略模式的封装.
$(div).animate({ left: "200px" }, 1000, "linear"); //匀速运动
$(div).animate({ left: "200px" }, 1000, "cubic"); //三次方的缓动

// Case2 表单验证
nameInput.addValidate({
  notNull: true,
  dirtyWords: true,
  maxLength: 30
});

const validateList = {
  notNull: function(value) {
    return value !== "";
  },
  maxLength: function(value, maxLen) {
    return value.length() > maxLen;
  }
};

// Case 3 购物车
class ShoppingCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }
  checkout() {
    return this.discount(this.amount);
  }
  setAmount(amount) {
    this.amount = amount;
  }
}

// 临时客户
function guestStrategy(amount) {
  return amount;
}

// 常客
function regularStrategy(amount) {
  return amount * 0.9;
}

// 优质客户
function premiumStrategy(amount) {
  return amount * 0.8;
}

// export { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy };

// 临时客户
const shoppingCart = new ShoppingCart(regularStrategy);
shoppingCart.setAmount(1000);
const total = shoppingCart.checkout();
console.log(total);
