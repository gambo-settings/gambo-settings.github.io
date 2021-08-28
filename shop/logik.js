const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.getElementById("tweak").style.display = "none";
document.getElementById("menu").style.display = "none";

function showproduct(nr) {
  if (nr === 1) {
    document.getElementById("tweak").style.display = "block";
    document.getElementById("menu").style.display = "none";
  }
  if (nr === 2) {
    document.getElementById("tweak").style.display = "none";
    document.getElementById("menu").style.display = "block";
  }
}