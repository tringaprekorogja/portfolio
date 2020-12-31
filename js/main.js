const checkbox = document.querySelector("input[name=checkbox]")
const navList = document.querySelector(".nav__list");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    navList.style.visibility = 'visible';
  } else {
    navList.style.visibility = 'hidden';
    navList.style.transition = 'all .2s';
  }
});