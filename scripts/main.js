import * as anim from "./animations.js"

const DEBUG_PAGES = false

// Ajax-esque page loading...because why not?
function loadPage(pageName) {
  let url = "./pages/" + pageName + ".html"
  fetch(url)
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
    .then((content) => {
      document.querySelector(".page").innerHTML = content;
    })
    .catch((error) => { console.log(error); });
}
document.querySelectorAll(".page-link").forEach(el => {
  el.addEventListener("click", (e) => {
    loadPage("home")
    e.preventDefault()
  }, false)
})
