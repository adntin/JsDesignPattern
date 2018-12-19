/**
 * 状态模式
 * Socket 状态机: javascript-state-machine
 */

// 超级玛丽
class SuperMarry {
  constructor() {
    this._currentState = [];
    this.states = {
      jump() {
        console.log("跳跃!");
      },
      move() {
        console.log("移动!");
      },
      shoot() {
        console.log("射击!");
      },
      squat() {
        console.log("蹲下!");
      }
    };
  }

  change(arr) {
    this._currentState = arr;
    return this;
  }

  go() {
    console.log("---触发动作---");
    this._currentState.forEach(T => this.states[T] && this.states[T]());
    return this;
  }
}

new SuperMarry()
  .change(["jump", "shoot"])
  .go() // 触发动作  跳跃!  射击!
  .go() // 触发动作  跳跃!  射击!
  .change(["squat"])
  .go(); // 触发动作  蹲下
