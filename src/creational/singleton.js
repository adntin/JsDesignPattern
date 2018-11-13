/**
 * 单例模式
 * 1. 生成灰色背景遮罩层
 * 2. serviceManager
 */

// Case 1
const createMask = (function() {
  var mask;
  return function() {
    return (
      mask || (mask = document.body.appendChild(document.createElement("div")))
    );
  };
})();
createMask();
createMask();

// Case 2
class Person {
  constructor() {
    if (Person.instance instanceof Person) {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }

  say() {
    console.log("hello world");
  }
}
const p1 = new Person();
const p2 = new Person();
console.log(p1 === p2);

Person.instance.say();
