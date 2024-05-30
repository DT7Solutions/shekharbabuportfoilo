(function ($) {
    "use strict";
    // mobile Menu area
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "1030",
        meanMenuContainer: '.mobile-menu'
    });

    // testimonial carousel
    $('.testimonial-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.testimonial-four-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // services carousel
    $('.service-slider-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // Partners carousel
    $('.partner-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
    $('.partner-four-grid-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            },
            1396: {
                items: 6
            }
        }
    })
    $('.partner-list-container-two .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        navText: ["<img src='img/carouselPrev.png'>", "<img src='img/carouselNext.png'>"],
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4,
            },
            1300: {
                items: 5,
            },
            1600: {
                items: 6
            }
        }
    })
    $('.portfolio-three-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='img/carouselPrev.png'>", "<img src='img/carouselNext.png'>"],
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
    // skill progress bar
    $('#skill-one').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-two').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-three').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-four').LineProgressbar({
        percentage: 75,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    // sidebar navigation
    jQuery('.scroll').onePgaeNav({
        wrapper: '#onepage-nav',
        speed: 1000,
    });
    // services three navigation
    jQuery('.scroll').onePgaeNav({
        wrapper: '#service-nav',
        speed: 1000,
    });

    // initialize AOS
    AOS.init();

    // mixitup
    var portfolioContainer = document.querySelector('.portfolio-massonary-container');
    if (portfolioContainer) {
        var mixer = mixitup(portfolioContainer);
        mixer.show()
            .then(function () {
                mixer.filter('.all');
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    }

    // journey tab
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // counter up
    $('.counter').counterUp({
        time: 3000
    });

    
    // animated heading
    $(function () {
        $('.animate-heading').animatedHeadline(
            {
                animationType: 'clip'
            }
        );
    })

    // service slider action buttons

    var ServiceCarousel = $('.service-slider-container .owl-carousel');
    $(".slide-nav-btn").on("click", function() {
        var targetIndex = parseInt($(this).data("target")) - 1;
        
        // Move the carousel to the target slide
        ServiceCarousel.trigger("to.owl.carousel", [targetIndex, 30, true]);
      });
    
    //   preloader
    $(window).on('load', function() {
        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');
    });

})(jQuery);



//  FAQS 
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }
items.forEach((item) => item.addEventListener('click', toggleAccordion));


// EMAIL JS CONTACT FORM 
// User: sekharababups@gmail.com 
// PW: Dt7@2021

function Send() {
    if (document.getElementById("name").value == "") {
        alert("Please enter your name");
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Please enter your email address");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("phone").value == "") {
        alert("Please enter your phone number");
        document.getElementById("phone").focus();
        return false;
    }
    if (document.getElementById("subject").value == "") {
        alert("Please enter the subject");
        document.getElementById("subject").focus();
        return false;
    }
    if (document.getElementById("message").value == "") {
        alert("Please enter your message");
        document.getElementById("message").focus();
        return false;
    }
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_dolczhj";
    const templateID = "template_itewwbr";
    // emailjs.send("Service_ID", "Template_ID", formData)
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log('Email sent successfully:', response.status, response.text);
            alert("Thank you, " + params.name + "! Your message has been sent successfully.");
            console.log(JSON.stringify(params, null, 2));
            document.getElementById("contact-info").reset();
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("Sorry ...!, " + params.name + ". Oops! Something went wrong. Please try again later.");
        });
    return false;
  /* 
  // Email js Template Form Design Code
    <p>&nbsp;</p>
    <p>You got a new message from {{name}}:</p>
        <p>Email: {{email}}</p>
    <p>Phonenumber: {{phone}}</p>
    <p>Subject: {{subject}}</p>
    <p>Message:</p>
    <p style="padding: 12px; font-style: italic;">{{message}}</p>
    <p>&nbsp;</p>
  */
}

