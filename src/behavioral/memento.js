/**
 * 备忘录模式
 * 前进 & 后退
 */

var Page = (function() {
  var index = 1,
    cache = {};
  return function(index) {
    const data = cache[index];
    if (data) {
      render(data);
    } else {
      Ajax.send("example.com/xxx", function(data) {
        cache[index] = data;
        render(data);
      });
    }
  };
})();
