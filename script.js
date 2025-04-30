document.addEventListener("DOMContentLoaded", () => {
    const openbutton = document.querySelector("#menu-open-button");
    const closebutton = document.querySelector("#menu-close-button");

    openbutton.addEventListener("click", () => {
        document.body.classList.add("show-mobile-menu");
    });

    closebutton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
        console.log("Menu closed")
    });
});
//initialize swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true,  
        slidesPerView: 1, 
        spaceBetween: 20,  
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});