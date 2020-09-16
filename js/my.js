
$('#product_tab li a').click(function (){
    id = $(this).attr('id');

    if(id == "all-product"){
        $('.product-1').fadeIn(0);
    }
    else {
        $('.product-1').fadeOut(0);
        $('.' + id).fadeIn(0);
    }
});

function setScroll(class_name){
    $('html, body').animate({
        scrollTop: $("." + class_name).offset().top - 40
    }, 1000);
}