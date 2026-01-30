function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("https://script.google.com/macros/s/AKfycbzzoNBQXcYQ-r412WHOTZpw_qw0dudQwMFH2pbQLtonnfL71iSb6nQbnRDz4_ArY05O/exec", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {

    if (data.status === "success") {
      window.location.href = "dashboard.html";
    }
    else if (data.status === "inactive") {
      alert("Your account is inactive due to 15 days inactivity. Please contact institute.");
    }
    else {
      alert("Invalid username or password");
    }

  });
}
