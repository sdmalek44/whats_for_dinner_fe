var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

const logOut = () => {
  if(sessionStorage.user_token){
    sessionStorage.removeItem('user_token')
  }
  document.location = 'index.html'
}

const searchRecipes = () => {
  var allergies = [];
  var checkboxes = document.getElementsByClassName('cb');
  Array.prototype.forEach.call(checkboxes, function(cb){ if (cb.checked){ allergies.push(cb.value) } });
  console.log(allergies)
}

document.getElementById('logout').addEventListener('click', logOut)

document.getElementById('search').addEventListener('click', searchRecipes)
