
document.querySelector("#addBtn").addEventListener("click", function() {
  if (confirm("Are you sure you want to add a new row?")) {
    var table = document.querySelector("#myTable");
    var newRow = table.insertRow();
    for (var i = 0; i < 3; i++) {
      var newCell = newRow.insertCell();
      newCell.innerHTML = "New Cell " + (i + 1);
    }
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "selectRow";
    newRow.insertCell().appendChild(newCheckbox);
  }
});


document.querySelector("#delBtn").addEventListener("click", function() {
  if (confirm("Are you sure you want to delete the selected rows?")) {
    var checkboxes = document.querySelectorAll(".selectRow:checked");
    checkboxes.forEach(function(checkbox) {
      checkbox.parentNode.parentNode.remove();
    });
  }
});



document.querySelector("#selectAll").addEventListener("change", function() {
  var checkboxes = document.querySelectorAll(".selectRow");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
});






var notificationTab = document.querySelector(".notification-tab");
notificationTab.addEventListener("click", function() {
  var notificationContent = this.querySelector(".notification-content");
  notificationContent.classList.toggle("show");
});

