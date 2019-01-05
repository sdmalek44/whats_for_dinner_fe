const loginUser = () => {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  if (password !== "" && email !== ""){
    fetch(`https://api-whats-for-dinner.herokuapp.com/api/v1/login`, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: {email: email, password: password} })
    })
    .then(res => res.json())
    .then(res => {
      if (res.token){
        sessionStorage.setItem("user_token", res.token);
        document.location = "search.html"
      } else {
        document.getElementById('flash').innerHTML = "Incorrect Username or Password"
      }
    })
  } else {
    document.getElementById('flash').innerHTML = "Please Enter Email and Password"
  }
}

if (sessionStorage.user_token){
  document.location = "search.html"
}

document.getElementById("login").addEventListener("click", loginUser)
