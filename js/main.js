let aboutOffset = $('#about').offset().top
$(window).scroll(function(){
    let windoScroll = $(window).scrollTop()


    if(windoScroll>=aboutOffset){
        $('nav').css('backgroundColor','#161a28');

    }
    else{
        $('nav').css('backgroundColor','transparent')
    }
})
var typingEffect = new Typed(".typedText",{
    strings : ["Front-End","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })
  $(document).ready(function() {


   
    $('.caption').hide().slideDown(2000);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active'); 
            });
            this.classList.add('active');
        });
    });
});
