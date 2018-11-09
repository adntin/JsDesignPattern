const createMask = (function () {
  var mask;
  return function () {
    return mask || (mask = document.body.appendChild(document.createElement('div')))
  }
}())

// Use
createMask();

/**
 * Run
 * open browser console 
 */

/**
 * Real example
 * 1. 生成灰色背景遮罩层
 * 2. serviceManager
 */