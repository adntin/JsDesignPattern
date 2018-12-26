import { IDevice } from "./2device";

class Service {
  private device: IDevice;

  constructor(device: IDevice) {
    this.device = device;
  }

  loginDevice() {
    return this.device.login();
  }

  spiderDevice() {
    return this.device.spider();
  }
}

export { Service };

// 代码说明：我们定义了一个IDevice接口，用于上层服务的依赖，
// 也就是说，上层服务（这里指Service）仅仅依赖IDevice接口，
// 对于具体的实现类我们是不管的，只要接口的行为不发生变化，增加新的设备类型后，上层服务不用做任何的修改。
// 这样设计降低了层与层之间的耦合，能很好地适应需求的变化，大大提高了代码的可维护性。
