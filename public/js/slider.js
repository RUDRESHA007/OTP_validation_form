const images = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.dot');
var index = 0
function slider() {

    if (index < 0) {
        index = images.length - 1;
    }

    if (index > images.length - 1) {
        index = 0;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    images[index].style.display = "block";
    dots[index].classList.add('active');
    
    index++;
    setTimeout(slider, 4000);
}
slider()






