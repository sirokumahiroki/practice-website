
const images = [
    "cafe_photo1.jpeg",
    "cafe_photo2.jpeg"
];

let currentIndex = 0;

const cafeImage = document.getElementById("cafe-image");

setInterval(function() {
    cafeImage.classList.add("fade-out");
    setTimeout(function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        cafeImage.src = images[currentIndex];
        cafeImage.classList.remove("fade-out");

    }, 500);

}, 6000);
