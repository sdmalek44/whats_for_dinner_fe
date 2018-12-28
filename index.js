const loginUser = () => {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  fetch(`https://api-whats-for-dinner.herokuapp.com/api/v1/login`, {
    method: "post",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({user: {email: email, password: password} })
  }).then(res => res.json())
    .then(res => sessionStorage.setItem("user_token", res.token));
}

document.getElementById("login").addEventListener("click", loginUser)
