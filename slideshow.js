const images = [
  "image2.jpg",
  "image 1.jpg", 
  "image3.jpg", 
  "image4.jpg", 
  "image5.png", 
  "image6.jpg"
];

const captions = [
  "Innovative",
  "Hard working",
  "Resilient",
  "Learner",
  "Visionary",
  "Adaptable"
];

let currentIndex = 0;

const imageElement = document.getElementById("slideshow-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const captionElement = document.getElementById("caption");

function showImage(index) {
  imageElement.src = images[index];
  captionElement.innerText = captions[index];
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

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});