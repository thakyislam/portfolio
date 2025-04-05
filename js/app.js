
$(document).ready(function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    // Navbar scroll effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".navbar").addClass("scrolled");
            $(".back-to-top").addClass("active");
        } else {
            $(".navbar").removeClass("scrolled");
            $(".back-to-top").removeClass("active");
        }
    });

    // Smooth scrolling for all anchor links
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html, body").animate(
            {
                scrollTop: $target.offset().top - 70,
            },
            250,
            "swing"
        );
    });

    // Back to top button
    // $(document).ready(function () {
    //     $(".back-to-top").click(function (e) {
    //       e.preventDefault();
    //       $("html, body").animate({ scrollTop: 0 }, 800);
    //     });
      
    //     // Optional: Show/hide back-to-top button on scroll
    //     $(window).scroll(function () {
    //       if ($(this).scrollTop() > 100) {
    //         $(".back-to-top").fadeIn();
    //       } else {
    //         $(".back-to-top").fadeOut();
    //       }
    //     });
    //   });
    

    // Add active class to nav links based on scroll position
    $(window).on("scroll", function () {
        var scrollPosition = $(this).scrollTop();

        // Check the position of each section
        $("section").each(function () {
            var topDistance = $(this).offset().top - 100;

            if (scrollPosition >= topDistance) {
                var sectionId = $(this).attr("id");
                $(".nav-link").removeClass("active");
                $('.nav-link[href="#' + sectionId + '"]').addClass("active");
            }
        });
    });

    // Mobile menu toggle
    $(".navbar-toggler").on("click", function () {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("scrolled");
        }
    });

    // Close mobile menu when clicking a link
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Typing effect for the hero section
    function typeEffect(element, speed) {
        var text = $(element).text();
        $(element).html("");

        var i = 0;
        var timer = setInterval(function () {
            if (i < text.length) {
                $(element).append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Apply typing effect to the hero subtitle with a delay
    setTimeout(function () {
        typeEffect($(".hero p.lead"), 30);
    }, 1000);
});
