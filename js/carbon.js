// Carbon Framework v0.1 Alpha
// Documentation: 
// Developed by Triangle (https://triangle.mx)
// carbon.js (Main Script File)

// Base Components


    // Smooth Scroll
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
        });
    });