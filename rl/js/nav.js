$(function() {

  var navig = $("#navig"),
      tit = $("#tit"),
      catalog = $("#catalog"),
      cartBtn = $("#main-cart-btn"),
      cartBtnCounter = $("#main-cart-btn__counter"),
      upBtn = $("#up"),
      upMobBtn = $("#up-mob"),
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
    if( window.innerWidth <= 767 ){
      headerH = $("#header").innerHeight();
    } else {
      headerH = $("#header").innerHeight() + $("#about").innerHeight() + $("#tit").innerHeight();
    } 
    if( scrollOffset >= headerH ) {
      navig.addClass("fixed");
    } else {
      navig.removeClass("fixed");
    }
    if( scrollOffset >= headerH ) {
      catalog.addClass("fixed");
    } else {
      catalog.removeClass("fixed");
    }
    if( scrollOffset >= headerH ) {
      upMobBtn.addClass("on");
    } else {
      upMobBtn.removeClass("on");
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

    /* Burger */
  $('.navbar__burger,.navbar__arrow').click(function(event) { 
    // e.preventDefault();
    $('.navbar__burger,.navbar__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

});