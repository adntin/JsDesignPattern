/**
 * 原型模式
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  clone() {
    return new Person(this.name, this.age);
  }
}

export default Person;
