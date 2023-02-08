// $(".expanding-cards__card").hover(function () {
//     $(this).addClass("expanded");
//     $(".expanding-cards__card").css("width", "200px");
//     $(this).css("width", "calc(100% - 600px)");
// }, function () {
//     $(this).removeClass("expanded")
//     $(".expanding-cards__card").css("width", "calc(100% / 4)");
// })


const expandingCards = document.querySelectorAll(".expanding-cards__card");

expandingCards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.classList.add("expanded");
        expandingCards.forEach(c => c.style.width = "200px");
        this.style.width = "calc(100% - 600px)";
    });

    card.addEventListener("mouseleave", function () {
        this.classList.remove("expanded");
        expandingCards.forEach(c => c.style.width = "calc(100% / 4)");
    });
});