let n = document.querySelector("button");
n.addEventListener("click", inputmsg);
function showmsg() {
  alert("Hello World");
}
function inputmsg() {
  let msg = prompt("Enter your message");
  n.textContent = "Roll no 1" + msg;
}


