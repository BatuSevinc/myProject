const image = document.querySelectorAll("img[class='img']");

image.forEach((e)=>{
    e.addEventListener("click",
    function expand(){
        e.classList.toggle("expand")
    })
})