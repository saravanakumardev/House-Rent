$(document).ready(function () {
    $(".menu li a").click(function () {
        $(".menu li a").removeClass("active")
        $(this).addClass("active")
    })
})
$(document).ready(function () {
    $(".menu-nav").click(function () {
        $('.menu').slideToggle("slow");
    });
});