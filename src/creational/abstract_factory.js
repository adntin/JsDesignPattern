/**
 * 抽象工厂模式
 * 通过类的抽象使得业务适用于一个产品类簇的创建，而不负责某一类产品的实例。
 * React: instantiateComponent: CompositeComponent & DOMComponent
 */

// 交通工具
const VehicleFactory = function(SubClass, SuperClass) {
  if (typeof VehicleFactory[SuperClass] === "function") {
    function F() {
      this.type = "交通工具";
    }
    F.prototype = new VehicleFactory[SuperClass]();
    SubClass.constructor = SubClass;
    SubClass.prototype = new F(); // 因为子类 SubClass 不仅需要继承 SuperClass 对应的类的原型方法，还要继承其对象属性
  } else {
    throw new Error("不存在该抽象类" + SuperClass.name);
  }
};

// Car 抽象类
VehicleFactory.Car = function() {
  this.type = "car";
};
VehicleFactory.Car.prototype = {
  getPrice: function() {
    return new Error("抽象方法不可使用");
  },
  getSpeed: function() {
    return new Error("抽象方法不可使用");
  }
};

const BMW = function(price, speed) {
  this.price = price;
  this.speed = speed;
};
VehicleFactory(BMW, "Car"); // 继承Car抽象类
BMW.prototype.getPrice = function() {
  console.log(`BWM price is ${this.price}`);
};
BMW.prototype.getSpeed = function() {
  console.log(`BWM speed is ${this.speed}`);
};

const bmw = new BMW(100, 300);
bmw.getPrice(); // BWM price is 100
bmw.getSpeed(); // BWM speed is 300
console.log(bmw instanceof VehicleFactory.Car); // true
