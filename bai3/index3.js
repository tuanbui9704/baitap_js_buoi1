var nhapUsd = document.getElementById("nhapUsd");
// console.log({nhapUsd});
var vndEl = 23500;
function kq(params) {
  var a = nhapUsd.value;
  var tong = Number(a) * vndEl;
  //   console.log({ tong });
  document.getElementById("quyDoi").innerText = "Tổng " + tong + "VND";
}
