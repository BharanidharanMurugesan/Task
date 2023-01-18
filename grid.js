
const firstColumnCells = document.querySelectorAll("td:nth-child(1)");


firstColumnCells.forEach(cell => {
  cell.setAttribute("contenteditable", "false");
});

const thirdColumnCells = document.querySelectorAll("td:nth-child(3)");


thirdColumnCells.forEach(cell => {
  cell.setAttribute("contenteditable", "false");
});
