import { Service } from "./0service";

const service = new Service("1");
const login = service.loginDevice();
const spider = service.spiderDevice();
console.log(`login: ${login}, spider: ${spider}`);
