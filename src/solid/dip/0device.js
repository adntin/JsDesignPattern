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

export { DeviceMML, DeviceTL2 };
