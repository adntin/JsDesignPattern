import { DeviceMML, DeviceTL2, DeviceTELNET, DeviceTL5 } from "./1device";

//设备采集的服务
class Service {
  MML = null;
  TL2 = null;
  TELNET = null;
  TL5 = null;
  type = null;

  constructor(type) {
    this.type = type;
    if (type == "0") {
      MML = new DeviceMML();
    } else if (type == "1") {
      TL2 = new DeviceTL2();
    } else if (type == "2") {
      TELNET = new DeviceTELNET();
    } else if (type == "3") {
      TL5 = new DeviceTL5();
    }
  }

  loginDevice() {
    if (this.type == "0") {
      return MML.login();
    } else if (this.type == "1") {
      return TL2.login();
    } else if (m_type == "2") {
      TELNET.login();
    } else if (m_type == "3") {
      TL5.login();
    }
    return false;
  }

  spiderDevice() {
    if (this.type == "0") {
      return MML.spider();
    } else if (this.type == "1") {
      return TL2.spider();
    } else if (m_type == "2") {
      return TELNET.spider();
    } else if (m_type == "3") {
      return TL5.spider();
    }
    return false;
  }
}

export { Service };
