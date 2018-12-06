/**
 * 组合模式
 * 又叫部分-整体模式, 用户只需要操作最上层的接口，就可以对所有成员做相同的操作
 */

form.validate = function(fields) {
  forEach(fields, function(index, field) {
    if (field.validate() === false) {
      return false;
    }
  });
  return true;
};
