
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  // const preloader = document.querySelector('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove();
  //   });
  // }

  /**
   * Sticky Header on Scroll
   */


//   window.addEventListener('load', headerFixed);
//   document.addEventListener('scroll', headerFixed);
// }



//jquery
$(document).ready(function() {
  const $selectHeader = $('#header');
  if ($selectHeader.length) {
    let headerOffset = $selectHeader.offset().top;
    let $nextElement = $selectHeader.next();

    const headerFixed = () => {
      if ((headerOffset - $(window).scrollTop()) <= 0) {
        $selectHeader.addClass('sticked slideInDown').css({
          'animation-duration': '1s',
          'transition': 'top 300ms ease'
        });
        if ($nextElement.length) $nextElement.addClass('sticked-header-offset');
      } else {
        $selectHeader.removeClass('sticked slideInDown').css({
          'animation-duration': '1s',
          'transition': 'top 300ms ease'
        });
        if ($nextElement.length) $nextElement.removeClass('sticked-header-offset');
      }
    };

    $(window).on('load', headerFixed);
    $(document).on('scroll', headerFixed);
  }
});


  // const selectHeader = document.querySelector('#header');
  // if (selectHeader) {
  //   let headerOffset = selectHeader.offsetTop;
  //   let nextElement = selectHeader.nextElementSibling;

  //   const headerFixed = () => {
  //     if ((headerOffset - window.scrollY) <= 0) {
  //       selectHeader.classList.add('sticked');
  //       if (nextElement) nextElement.classList.add('sticked-header-offset');
  //     } else {
  //       selectHeader.classList.remove('sticked');
  //       if (nextElement) nextElement.classList.remove('sticked-header-offset');
  //     }
  //   }
  //   window.addEventListener('load', headerFixed);
  //   document.addEventListener('scroll', headerFixed);
  // }

  /**
   * Navbar links active state on scroll
   */
  // let navbarlinks = document.querySelectorAll('#navbar a');

  // function navbarlinksActive() {
  //   navbarlinks.forEach(navbarlink => {

  //     if (!navbarlink.hash) return;

  //     let section = document.querySelector(navbarlink.hash);
  //     if (!section) return;

  //     let position = window.scrollY + 200;

  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active');
  //     } else {
  //       navbarlink.classList.remove('active');
  //     }
  //   })
  // }
  // window.addEventListener('load', navbarlinksActive);
  // document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
    if (!navbarlink.hash) return;
  
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
  
    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'slide-in-down',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});



// owlcarousel slider

// $(document).ready(function () {

//   $("#owl-demo").owlCarousel({
//       autoplay: true, // Set autoplay to true
//       autoplayTimeout: 3000, // Set autoplay interval to 3 seconds
//       autoplaySpeed: 1000, // Set slide transition speed to 1 second
//       items: 3,
//       itemsTablet: [768,2],
//       itemsMobile : [479,1],
//       dots: true,
//   });

// });

$(document).ready(function () {
  var owl = $("#owl-demo");
  
  owl.owlCarousel({
    autoplay: true,
    autoplaySpeed: 2000,
    // items: 3,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    smartSpeed: 800,
  });

  // Pagination click event handlers
  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

// owlcarousel slider
// jQuery("#myCarousel").bind("mousewheel", function (e) {
//   if (e.originalEvent.wheelDelta / 120 > 0) {
//     $(this).carousel("next");
//   } else {
//     $(this).carousel("prev");
//   }
// });

// JavaScript
