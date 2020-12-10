function openSidebar(){
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("show-sidebar", true);
}

function closeSidebar(){
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("show-sidebar", false);
}

function openTab(evt, idName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("job-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("open");
