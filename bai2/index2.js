var nhapGiaTri = document.getElementById("nhap5El");
// console.log({ nhapGiaTri });
function kq(params) {
  var a = nhapGiaTri.value;
  var tong = Number(a) / 5;
  //   console.log({ tong });
  document.getElementById("xuatGiaTri").innerText =
    "Giá trị trung bình " + tong;
}
