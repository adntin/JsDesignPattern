/**
 * 命令模式
 * 应用场景：
 * 有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。
 * 此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此的耦合关系。
 * 就订餐而言，客人需要向厨师发送请求，但是完全不知道这些厨师的名字与联系方式。
 * 因此命令模式把请求封装成command对象，这个对象可以在程序中四处传递，解开了调用者与接收者之间的耦合关系。
 */

// 驾驶舱
class Cockpit {
  constructor(command) {
    this.command = command;
  }
  execute() {
    this.command.execute();
  }
}

// 涡轮机
class Turbine {
  constructor() {
    this.state = false;
  }
  on() {
    console.log("turbine: on");
    this.state = true;
  }
  off() {
    console.log("turbine: off");
    this.state = false;
  }
}

// 启动
class OnCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }
  execute() {
    this.turbine.on();
  }
}

// 关闭
class OffCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }
  execute() {
    this.turbine.off();
  }
}

// export { Cockpit, Turbine, OnCommand, OffCommand };

const turbine = new Turbine();
const onCommand = new OnCommand(turbine);
const offCommand = new OffCommand(turbine);

const cockpit1 = new Cockpit(onCommand);
cockpit1.execute();

const cockpit2 = new Cockpit(offCommand);
cockpit2.execute();
