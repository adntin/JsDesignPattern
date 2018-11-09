class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(key, callback) {
    const callbacks = this.listeners[key] || [];
    callbacks.push(callback);
    this.listeners[key] = callbacks;
  }

  emit(key, ...args) {
    const callbacks = this.listeners[key] || [];
    callbacks.forEach((callback) => {
      callback.apply(this, args);
    })
  }

  remove(key) {
    delete this.listeners[key];
  }
}

// Use
const e1 = new EventEmitter();
e1.on('a', (...args) => {
  console.log(args)
});
e1.emit('a', 1, 2)
e1.emit('a', 3, 4, 5);

/**
 * Run
 * node src/observer_pattern
 */

/**
 * Real example
 * 1. 订阅报纸或订阅牛奶
 * 2. 订阅button click事件
 * 3. fetchInitData -> hide loading
 */
