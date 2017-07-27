function filterTechSkillsOne() {

  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputOne");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTableOne");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterTechSkillsTwo() {

  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputTwo");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTableTwo");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterTechSkillsThree() {

  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputThree");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTableThree");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}
