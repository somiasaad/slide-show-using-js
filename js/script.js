let image = document.querySelector("#slideshow")
let images = ["img/img1.jpg", "img/img2.jpg", "img/img4j.jpg"]
let i = 0;

function slideshow() {
    image.setAttribute('src', images[i]) //image[0]
    i++ //2
    setTimeout(function() {
        slideshow()
    }, 2000)
    if (i > 2) {
        i = 0
    }
}
slideshow();