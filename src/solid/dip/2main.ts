import { Service } from "./2service";
import { DeviceTL5 } from "./2device";

const service = new Service(new DeviceTL5());
const login = service.loginDevice();
const spider = service.spiderDevice();
console.log(`login: ${login}, spider: ${spider}`);
