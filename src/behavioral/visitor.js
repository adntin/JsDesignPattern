/**
 * 访问者模式
 * 预留通路，回调实现。
 */

function bonusVisitor(employee) {
  employee.bonus = 0;
  if (employee instanceof Manager) {
    employee.bonus = employee.salary * 4;
  }
  if (employee instanceof Developer) {
    employee.bonus = employee.salary * 2;
  }
}

class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

// export { Developer, Manager, bonusVisitor };

const manager = new Manager(30000);
manager.accept(bonusVisitor);
console.log(manager.bonus);

const developer = new Developer(20000);
developer.accept(bonusVisitor);
console.log(developer.bonus);
