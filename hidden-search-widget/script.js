const button = document.querySelector(".fa-search");
const input = document.getElementById("Search");
button.addEventListener("click",expand);

function expand(e){
   input.classList.toggle("close");
}