var chieudaiEl = document.getElementById("chieudaiEl");
// console.log({ chieudaiEL });
var chieurongEl = document.getElementById("chieurongEl");
// console.log({ chieurongEl });
function kqchuvi(params) {
  var daichuvi = chieudaiEl.value;
  var rongchuvi = chieurongEl.value;
  var tongchuvi = (Number(daichuvi) + Number(rongchuvi)) * 2;
  //   console.log({ tongchuvi });
}
function kqdientich(params) {
  var daidt = chieudaiEl.value;
  var rongdt = chieurongEl.value;
  var tongdt = Number(daidt) * Number(rongdt);
  //   console.log({ tongdt });
}
