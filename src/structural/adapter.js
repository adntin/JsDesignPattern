/**
 * 适配器模式
 * 香港插座 vs 中国插座
 * server response data adapter jqGrid data
 * Request for Http or Socket
 */

let $id = id => {
  return document.getElementById(id);
};

$id = id => {
  return jQuery("#" + id)[0];
};
