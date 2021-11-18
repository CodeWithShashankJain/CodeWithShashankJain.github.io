console.log("helo");
document.getElementById("+").disabled = false;
document.getElementById("-").disabled = false;

let count = 0;
document.getElementById("+").onclick = function (e) {
  count++;
  let span = document.getElementById("increment");
  span.innerHTML = count;
  console.log(count);
};

document.getElementById("-").onclick = function (e) {
  if (count > 0) {
    count--;
  }
  let span = document.getElementById("increment");
  span.innerHTML = count;
  console.log(count);
  if (count == 0) {
    disableBtn();
  }
  enableBtn();
};
function disableBtn() {
  document.getElementById("+").disabled = true;
  document.getElementById("-").disabled = true;
}
