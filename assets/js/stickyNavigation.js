window.addEventListener("scroll", function(){
  if(document.documentElement.scrollTop > 100){
    document.getElementById("header").classList.add('sticky-navigation');
  } else{
    document.getElementById("header").classList.remove('sticky-navigation');
  }
});
