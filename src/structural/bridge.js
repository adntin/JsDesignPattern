/**
 * 桥接模式
 * 将抽象部分与它的实现部分分离，使它们都可以独立地变化。
 */

// 运动模块
class Speed {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  run() {
    console.log(`运动起来 ${this.x} + ${this.y}`);
  }
}

// 着色模块
class Color {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log(`绘制颜色 ${this.color}`);
  }
}

// 说话模式
class Speak {
  constructor(wd) {
    this.word = wd;
  }
  say() {
    console.log(`说话 ${this.word}`);
  }
}

// -------------------------

// 球类，桥接(着色+运动)
class Ball {
  constructor(x, y, cl) {
    this.speed = new Speed(x, y);
    this.color = new Color(cl);
  }
  init() {
    this.speed.run();
    this.color.draw();
  }
}

// 人类，桥接(运动+说话)
class Man {
  constructor(x, y, wd) {
    this.speed = new Speed(x, y);
    this.speak = new Speak(wd);
  }
  init() {
    this.speed.run();
    this.speak.say();
  }
}

const man = new Man(1, 2, "hello world");
man.init();
