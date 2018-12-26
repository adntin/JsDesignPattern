import { DeviceMML, DeviceTL2 } from "./0device";

//设备采集的服务
class Service {
  MML = null;
  TL2 = null;
  type = null;

  constructor(type) {
    this.type = type;
    if (type == "0") {
      MML = new DeviceMML();
    } else if (type == "1") {
      TL2 = new DeviceTL2();
    }
  }

  loginDevice() {
    if (this.type == "0") {
      return MML.login();
    } else if (this.type == "1") {
      return TL2.login();
    }
    return false;
  }

  spiderDevice() {
    if (this.type == "0") {
      return MML.spider();
    } else if (this.type == "1") {
      return TL2.spider();
    }
    return false;
  }
}

export { Service };
