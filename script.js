const article = document.getElementsByTagName("article")[0];
const boxRows = document.getElementsByClassName("box-row");

console.log(article.clientHeight);
for (row of boxRows) {
  row.style.height = article.clientHeight / 4 + "px";
  row.style.width = article.clientHeight / 2 + "px";
  console.log(row.clientWidth);
}
