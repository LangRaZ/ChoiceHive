var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    slideshowContainer = document.getElementsByClassName('carousel')[0];


    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1); 
    }

    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

pause = () => {
    clearInterval(myTimer);
}
  
resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}



// function getTextValue(element) {
//     var text = element.querySelector('.produk-text').textContent;
//     sessionStorage.setItem("product",text);
// }

function getTextValue(element) {
    var text = element.querySelector('.produk-text').textContent;
    // sessionStorage.setItem("product",text);
    var url = "ProductPage.html?search="+encodeURIComponent(text);
    window.location.href = url;
}

