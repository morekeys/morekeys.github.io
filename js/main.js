var navSmall = function() {
  $(document).on("scroll", function() {
    if($(document).scrollTop() > 10) {
        $(".navbar").addClass("navbar-small");
        $(".navbar-brand").addClass("navbar-brand-small");
    } else{
        $(".navbar").removeClass("navbar-small");
        $(".navbar-brand").removeClass("navbar-brand-small");
    }
  });
};

$(document).ready(navSmall);
