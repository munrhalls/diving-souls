const body = document.getElementsByTagName("body")[0];

body.addEventListener("click", function (e) {
  console.log(e.clientX, e.clientY);
});
