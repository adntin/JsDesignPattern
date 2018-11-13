/**
 * 创建者模式
 * Request builder
 */

class Request {
  constructor() {
    this.url = "";
    this.method = "";
    this.payload = {};
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  setUrl(url) {
    this.request.url = url;
    return this;
  }

  setMethod(method) {
    this.request.method = method;
    return this;
  }

  setPayload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

export default RequestBuilder;
