let btn = document.querySelector(".bars");
let navv = document.querySelector(".nav");
console.log(navv);
btn.onclick=function(){
    navv.classList.toggle("hide");
    btn.classList.toggle("animat")
}