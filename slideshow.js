const images = [
    "dog3.jpg", 
    "dog2.jpg",
    "download.jpg",
    "flower.jpg",
    "images.jpg"
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.getElementById("slideshow-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const captionElement = document.getElementById("caption");
  
  function showImage(index) {
    imageElement.src = images[index];
    captionElement.innerText = `Image ${index + 1}`;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
  
  setInterval(nextImage, 3000);