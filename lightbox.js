
  var pics = document.querySelectorAll(".pic"); 
  var lightbox = document.getElementById("lightbox"); 
  var lightboxImage = document.getElementById("lightboxImage");

  for (i=0; i<pics.length; i++) {
    pics[i].addEventListener("click", showLightbox);
  }

  function showLightbox() {
    var Location = this.getAttribute("data-src");
    lightboxImage.setAttribute("src", Location);
    lightbox.style.display = "block"; 
  }
  
  lightbox.onclick = function() { 
    lightbox.style.display = "none";
  }