$(function(){


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        center:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })
    

    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    });

    $(`.nav__button`).on(`click`, function(){
        $(`.nav`).slideToggle(500);
    })






});
