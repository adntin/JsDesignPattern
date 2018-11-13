/**
 * 抽象工厂模式
 */

// 机器人生产者
function droidProducer(kind) {
  switch (kind) {
    case "battle":
      return battleDroidFactory;
    case "pilot":
      return pilotDroidFactory;
    default:
      throw new Error("kind overflow");
  }
}

// 战斗机
function battleDroidFactory() {
  return new B1();
}

// 机器人
function pilotDroidFactory() {
  return new Rx24();
}

class B1 {
  info() {
    return "B1, Battle Droid";
  }
}

class Rx24 {
  info() {
    return "Rx24, Pilot Droid";
  }
}

export default droidProducer;
