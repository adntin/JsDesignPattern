//MML类型的设备
class DeviceMML {
  login() {
    console.log("MML设备登录");
    return true;
  }
  spider() {
    console.log("MML设备采集");
    return true;
  }
}

//TL2类型设备
class DeviceTL2 {
  login() {
    console.log("TL2设备登录");
    return true;
  }
  spider() {
    console.log("TL2设备采集");
    return true;
  }
}

//TELNET类型设备
class DeviceTELNET {
  login() {
    console.log("TELNET设备登录");
    return true;
  }

  spider() {
    console.log("TELNET设备采集");
    return true;
  }
}

//TL5类型设备
class DeviceTL5 {
  login() {
    console.log("TL5设备登录");
    return true;
  }

  spider() {
    console.log("TL5设备采集");
    return true;
  }
}

export { DeviceMML, DeviceTL2, DeviceTELNET, DeviceTL5 };
