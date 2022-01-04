var songay = document.getElementById("songay");
console.log({ songay });
var luong1Ngay = 100000;
function tongLuong() {
  var a = songay.value;
  var tong = Number(a) * luong1Ngay;
  console.log({ tong });
  document.getElementById("kq").innerText = "Tổng lương " + tong + "VND";
}
