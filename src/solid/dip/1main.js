import { Service } from "./1service";

const service = new Service("3");
const login = service.loginDevice();
const spider = service.spiderDevice();
console.log(`login: ${login}, spider: ${spider}`);
