
function createUser(){
  var email = document.getElementById("email").value;
  var password1 = document.getElementById("password-1").value
  var password2 = document.getElementById("password-2").value
  if (password1 === password2 && password1 !== "" && email !== ""){
    fetch(`https://api-whats-for-dinner.herokuapp.com/api/v1/users`, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: {email: email, password: password1}})
    })
    .then(res => res.json())
    .then(res => {
      if (res.token){
        sessionStorage.setItem("user_token", res.token)
        document.location = "search.html"
      } else {
        document.getElementById('flash').innerHTML = "Email already exists"
      }
    })
  } else {
    document.getElementById('flash').innerHTML = "Passwords do not Match"
  }
}

document.getElementById('new-user').addEventListener("click", createUser)
