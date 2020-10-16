const data = null;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://sandbox.api.mxmerchant.com/checkout/v3/merchant/516158974");
xhr.setRequestHeader("authorization", "Basic dVNSMXY4YmVVRUdmZmp1UGhuZm1XQVRJOjBVVTVjcjVURlU5a2ppNS9US1cwWHJwZERXZz0=");

xhr.send(data);