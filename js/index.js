$(function(){




    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    });

    $(`.nav__button`).on(`click`, function(){
        $(`.nav`).slideToggle(500);
    })






});
