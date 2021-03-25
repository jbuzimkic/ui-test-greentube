function collapseReadMore(elementId){
  if(document.getElementById(""+elementId).classList.contains("active-read-more-wrapper")){
    var className = document.getElementsByClassName("read-more-wrapper");
    for(var i=0; i<className.length; i++){
      className[i].classList.remove("active-read-more-wrapper");
    }
    document.getElementById(""+elementId).classList.remove("active-read-more-wrapper");
    document.getElementById("login").classList.remove("active-login-section");
  }else {
    var className = document.getElementsByClassName("read-more-wrapper");
    for(var i=0; i<className.length; i++){
      className[i].classList.remove("active-read-more-wrapper");
    }
    document.getElementById(""+elementId).classList.add("active-read-more-wrapper");
    document.getElementById("login").classList.add("active-login-section");
  }

}
