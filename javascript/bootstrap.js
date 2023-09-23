const body = document.querySelector('body')
const modeToggle = document.getElementById("modetoggle")



function toggleMode() {
  body.classList.toggle('dark-mode');

  let txt = modeToggle.innerText;
  modeToggle.innerText = txt == 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
}
modeToggle.addEventListener('click', toggleMode)
