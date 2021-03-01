let panel = document.getElementsByClassName("panel");
// console.log(touch);
for (let touch of panel) {
  //   console.log(touch);
  touch.addEventListener("click", () => {
    // console.log("touch");
    removeTransitionFromAll();
    touch.classList.add("active");
  });
}
function removeTransitionFromAll() {
  for (let untouch of panel) {
    untouch.classList.remove("active");
  }
}
