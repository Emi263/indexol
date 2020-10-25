let ham=document.querySelector('.hamburger');
let iksi=document.querySelector('.cancel');
let nav=document.getElementsByTagName("nav");
let lista=document.querySelector('.il');

ham.addEventListener("click", function(){

nav[0].style.right= 0 +"px";


})

iksi.addEventListener('click', function fun() {
  
    nav[0].style.right= -200 +"px";


     });



