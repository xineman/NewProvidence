window.onscroll = function() {
    myFunction()
};
var currentSlide = 1;
var elm = document.getElementById("main-menu");
var slides = document.getElementsByClassName("slider-image");
var texts = document.getElementsByClassName("slider-item-text");

function myFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        elm.classList.remove("wide-header");
        elm.classList.add("thin-header");
    } else {
        elm.classList.add("wide-header");
        elm.classList.remove("thin-header");
    }
}

function showSlide(n) {
    document.getElementsByClassName("active-image")[0].classList.remove("active-image");
    texts[currentSlide - 1].classList.remove("active");
    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.remove("animated");
    }
    texts[currentSlide - 1].classList.add("animated");
    texts[n - 1].classList.add("animated");
    for (var i = 0; i < texts.length; i++) {
        if (i < n - 1) texts[i].style.left = "-570px";
        else if (i > n - 1) texts[i].style.left = "570px";
        else texts[i].style.left = "";
    }
    texts[n - 1].classList.add("active");
    currentSlide = n;
    slides[n - 1].classList.add("active-image");
}

function plusSlide(n) {
    document.getElementsByClassName("active-image")[0].classList.remove("active-image");
    texts[currentSlide - 1].classList.remove("active");

    if (n == 1) {
        if (currentSlide + n > slides.length) {
            if (texts.length > 2) {
                for (var i = 1; i < texts.length - 1; i++) {
                    texts[i].classList.remove("animated");
                }
            }
            for (var i = 1; i < texts.length; i++) {
                texts[i].style.left = "570px";
            }
            texts[0].classList.add("active");
            texts[0].style.left = "";
            currentSlide = 1;
            slides[0].classList.add("active-image");
        } else {
            if (texts.length > 2) {
                for (var i = 1; i < texts.length - 1; i++) {
                    texts[i].classList.add("animated");
                }
            }
            texts[currentSlide].classList.add("active");
            texts[currentSlide].style.left = "";
            texts[currentSlide - 1].style.left = "-570px";
            slides[currentSlide].classList.add("active-image");
            ++currentSlide;
        }
    } else if (n == -1) {
        if (currentSlide + n < 1) {
            if (texts.length > 2) {
                for (var i = 1; i < texts.length - 1; i++) {
                    texts[i].classList.remove("animated");
                }
            }
            for (var i = 0; i < texts.length - 1; i++) {
                texts[i].style.left = "-570px";
            }
            texts[texts.length - 1].classList.add("active");
            texts[slides.length - 1].style.left = "";
            currentSlide = texts.length;
            slides[texts.length - 1].classList.add("active-image");
        } else {
            if (texts.length > 2) {
                for (var i = 1; i < texts.length - 1; i++) {
                    texts[i].classList.add("animated");
                }
            }
            texts[currentSlide - 2].classList.add("active");
            texts[currentSlide - 2].style.left = "";
            texts[currentSlide - 1].style.left = "570px";
            slides[currentSlide - 2].classList.add("active-image");
            --currentSlide;
        }
    }
}

function switchPlan(plan) {
    if (plan == 0) {
        document.getElementById("switcher").className = "leftside";
        document.getElementsByClassName("plan-option")[0].classList.add("selected-plan");
        document.getElementsByClassName("plan-option")[1].classList.remove("selected-plan");
    } else {
        document.getElementById("switcher").className = "rightside";
        document.getElementsByClassName("plan-option")[1].classList.add("selected-plan");
        document.getElementsByClassName("plan-option")[0].classList.remove("selected-plan");
    }
}
