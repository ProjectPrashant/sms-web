
function copyTextValue(bf) {
  var address = bf.checked ? document.getElementById("add").value : '';
  document.getElementById("add2").value = address;
}
