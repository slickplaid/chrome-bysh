// Options.js
// Saves options to localStorage.
function save_options() {
  var login = $("#login").val();
  localStorage["bysh_login"] = login;
  var password = $("#password").val()
  localStorage["bysh_password"] = password

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 7500);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  $("#login").val( localStorage["bysh_login"] )
  $("#password").val( localStorage["bysh_password"] )
}

