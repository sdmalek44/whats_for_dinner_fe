
const logOut = () => {
  if(sessionStorage.user_token){
    sessionStorage.removeItem('user_token')
  }
  document.location = 'index.html'
}

const searchRecipes = () => {
  
}

document.getElementById('logout').addEventListener('click', logOut)

document.getElementById('search').addEventListener('click', searchRecipes)
