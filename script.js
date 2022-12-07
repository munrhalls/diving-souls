const article = document.getElementsByTagName("article")[0];
const boxRows = document.getElementsByClassName("box-row");

for (row of boxRows) {
  const divideBy = 1.5;
  row.style.height = article.clientHeight / (divideBy * 2) + "px";
  row.style.width = article.clientHeight / divideBy + "px";
}
