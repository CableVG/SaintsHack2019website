$(document).ready(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 25
            }, 750);
            return false;
          }
        }
    });

    for(var i in faqs){
        var curFac = faqs[i];
        $(".question-col:nth-of-type("+(i % 3 + 1)+")").append("<h3 class='faqs-question' id="+i+">"+curFac.question+"</h3>");
        $(".question-col:nth-of-type("+(i % 3 + 1)+")").append("<p class='faqs-answer' id="+i+">"+curFac.answer+"</p><br>");
    }
});
