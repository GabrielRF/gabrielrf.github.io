(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.toc-wrapper').pushpin({ top: $('.toc-wrapper').offset().top });
    $('.collapsible').collapsible({accordion:false});
    $('.materialboxed').materialbox();

    $('a[href*=#]:not([href=#]):not([href=#lmgtfyBot]):not([href=#RastreioBot]):not([href=#SafeBot]):not([href=#Zabbix])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
