/**
 * 模版方法模式
 * 模版方法模式着重于父类对子类的控制
 */

// Case 1 上帝创造生命
var Life = function() {};
Life.prototype.init = function() {
  this.DNA复制();
  this.出生();
  this.成长();
  this.衰老();
  this.死亡();
};
Life.prototype.DNA复制 = function() {
  // 由上帝类统一实现算法, 看不懂的代码
};
Life.prototype.出生 = function() {};
Life.prototype.成长 = function() {};
Life.prototype.衰老 = function() {};
Life.prototype.死亡 = function() {};

// 哺乳动物
var Mammal = function() {};
Mammal.prototype = Object.create(Life.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.出生 = function() {
  // 胎生(); // 由哺乳类统一实现
};
Mammal.prototype.成长 = function() {
  // 留给子类去实现
};
Mammal.prototype.衰老 = function() {
  // 留给子类去实现
};
Mammal.prototype.死亡 = function() {
  // 留给子类去实现
};

// Dog类
var = Dog = function(){ }
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;
var dog = new Dog();
dog.init();

// ------------------------------

// Case 2 游戏中心
var GameCenter = function() {};
GameCenter.prototype.init = function() {
  this.login();
  this.gameStart();
  this.end();
};
GameCenter.prototype.login = function() {
  console.log("登录成功");
};
GameCenter.prototype.gameStart = function() {
  // 由子类实现
};
GameCenter.prototype.end = function() {
  console.log("欢迎下次再来");
};

// 斗地主
var Landlords = function() {
  GameCenter.call(this);
};
Landlords.prototype = Object.create(GameCenter.prototype);
Landlords.prototype.constructor = Landlords;
Landlords.prototype.gameStart = function() {
  console.log("斗地主, 开始...");
};

const landlords = new Landlords();
landlords.init();
