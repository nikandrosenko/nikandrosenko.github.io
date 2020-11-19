$(function() {

  var navig = $("#navig"),
      tit = $("#tit"),
      cartBtn = $("#main-cart-btn"),
      cartBtnCounter = $("#main-cart-btn__counter"),
      upBtn = $("#up"),
      navH = $("#navbar").innerHeight(),
      headerH = $("#header").innerHeight() + $("#about").innerHeight() + $("#tit").innerHeight(),
      scrollOffset = $(window).scrollTop();

      
  /* Fixed header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll() {
    if( scrollOffset >= headerH ) {
      navig.addClass("fixed");
    } else {
      navig.removeClass("fixed");
    }
    if( scrollOffset >= headerH ) {
      tit.addClass("fixed");
    } else {
      tit.removeClass("fixed");
    }
    if( scrollOffset >= navH ) {
      cartBtn.addClass("fixed");
    } else {
      cartBtn.removeClass("fixed");
    }
    if( scrollOffset >= navH ) {
      cartBtnCounter.removeClass("min");
    } else {
      cartBtnCounter.addClass("min");
    }
    if( scrollOffset >= navH ) {
      upBtn.addClass("on");
    } else {
      upBtn.removeClass("on");
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    var $this = $(this),
    blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top - 69;

    $("html, body").animate({
      scrollTop: blockOffset
    }, 700);

  
  });

  

  

  //  /* Menu nav toggle */
  // $("#nav_toggle").on("click", function(event) {
  //   event.preventDefault();

  //   $(this).toggleClass("active");
  //   $("#nav").toggleClass("active");

  // });

  // /* Collapse */

  // $("[data-collapse]").on("click", function(event) {
  //   event.preventDefault();

  //   var $this = $(this),
  //       blockId = $this.data('collapse');
    
  //   $this.toggleClass("active");

  // });

  //   /* Slider */
  //   $("[data-slider]").slick({
  //     infinite: true,
  //     fade: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  // });



});