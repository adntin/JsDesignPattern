/**
 * 外观模式(门面模式)
 * 将一些复杂操作封装起来，并创建一个简单的接口用于调用。
 * export {}
 * utils/index.js
 */
function addEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}

const btn = document.getElementById("button");
addEvent(btn, "click", function() {
  console.log("绑定 click 事件");
});
