function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  var url = "https://script.google.com/macros/s/AKfycbz8JmVVn4pTwp59c2tFGSFhhB4VIjtaGcA-dnTc4uxm76C1IITaavSxwNTz1Yo0sGgF/exec"
    + "?username=" + user
    + "&password=" + pass;

  fetch(url)
    .then(res => res.text())
    .then(result => {
      if (result.trim() === "success") {
        window.location.href = "dashboard.html";
      } else {
        alert("Wrong Username or Password");
      }
    });
}
