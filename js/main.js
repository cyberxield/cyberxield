(function ($) {
    "use strict";
    // Dynamic Icon

    var faviconImages = ["/img/favicon.ico","/img/faviconcx.ico","/img/faviconcx2.ico"]; // Array of favicon image paths
    var currentFaviconIndex = 0; // Index to track the current favicon image

    function changeFaviconAutomatically() {
    var favicon = document.getElementById("dynamic-favicon");
    favicon.href = faviconImages[currentFaviconIndex];
    currentFaviconIndex = (currentFaviconIndex + 1) % faviconImages.length; // Cycle through the images
    }


    // Set an interval to change the favicon automatically every few seconds (e.g., 5 seconds)
    var interval = setInterval(changeFaviconAutomatically, 500); // Change every 5 seconds


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    const contactForm = document.querySelector("#contact-form");
    const submitBtn = document.querySelector(".submit-btn");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const publicKey = "Abmv_rFKaV1wgG-zJ";
    const serviceID = "service_webiste";
    const templateId = "template_o8eqp0f";

    emailjs.init(publicKey);
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        submitBtn.innerText = "Just A Moment...";
        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        }
        emailjs.send(serviceID, templateId, inputFields)
            .then(() => {
                submitBtn.innerText = "Message Sent Successfully";
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
            }, (error) => {
                console.log(error);
                submitBtn.innerText = "Something Went Wrong!!!";
            });
    });

})(jQuery);

