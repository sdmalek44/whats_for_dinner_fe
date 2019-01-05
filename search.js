
const logOut = () => {
  if(sessionStorage.user_token){
    sessionStorage.removeItem('user_token')
  }
  document.location = 'index.html'
}

document.getElementById('logout').addEventListener('click', logOut)
