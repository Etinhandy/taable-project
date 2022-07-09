function myFunction() {
  // Declared my variables here
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // This actually to Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// // My code to change the button order
let actionEl = document.querySelector(".shutdown1");
let statusEl = document.querySelector(".status");

actionEl.addEventListener("click", (e) => {
  if (actionEl.innerText === "Shutdown") {
    actionEl.innerText = "Restart";
    statusEl.innerText = "Offline";
    statusEl.style.background = "#D8D8D8";
  } else {
    actionEl.innerText = "Shutdown";
    statusEl.innerText = "Online";
    statusEl.style.background = "#09A118";
  }
});

