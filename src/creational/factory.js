/**
 * 工厂模式
 * 0. 编译时不能确定, 执行时才确定
 * 1. 公司饮料机, coffee or milk
 * 2. Post Card 渲染
 */

function bmwFactory(type) {
  if (type === "X5") return new Bmw(type, 108000, 300);
  if (type === "X6") return new Bmw(type, 111000, 320);
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

export default BmwFactory;

const bmw1 = bmwFactory("X5");
const bmw2 = bmwFactory("X6");
