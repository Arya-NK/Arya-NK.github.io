// Simple menu toggle (replaces dlmenu plugin)
$(document).ready(function() {
  var $menu = $('#dl-menu');
  var $trigger = $menu.find('.dl-trigger');
  var $menuList = $menu.find('.dl-menu');

  // Add back buttons to submenus
  $menu.find('ul.dl-submenu').each(function() {
    if ($(this).find('.dl-back').length === 0) {
      $(this).prepend('<li class="dl-back"><a href="#">back</a></li>');
    }
  });

  // Toggle menu open/close on button click
  $trigger.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if ($menuList.hasClass('dl-menuopen')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Handle menu item clicks for submenus
  $menuList.on('click', 'li > a', function(e) {
    var $link = $(this);
    var $item = $link.parent('li');
    var $submenu = $item.children('ul.dl-submenu');

    // If this item has a submenu, show it
    if ($submenu.length > 0 && $link.attr('href') === '#') {
      e.preventDefault();
      e.stopPropagation();
      $menuList.addClass('dl-subview');
      $item.addClass('dl-subviewopen');
    }
  });

  // Handle back button clicks
  $menuList.on('click', '.dl-back > a', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var $item = $(this).closest('li.dl-subviewopen');
    $item.removeClass('dl-subviewopen');

    if ($menuList.find('.dl-subviewopen').length === 0) {
      $menuList.removeClass('dl-subview');
    }
  });

  // Close menu when clicking outside
  $(document).on('click', function(e) {
    if ($menuList.hasClass('dl-menuopen') && !$(e.target).closest('#dl-menu').length) {
      closeMenu();
    }
  });

  function openMenu() {
    $menuList.addClass('dl-menuopen dl-menu-toggle');
    $trigger.addClass('dl-active');
    setTimeout(function() {
      $menuList.removeClass('dl-menu-toggle');
    }, 300);
  }

  function closeMenu() {
    $menuList.removeClass('dl-menuopen').addClass('dl-menu-toggle');
    $trigger.removeClass('dl-active');
    setTimeout(function() {
      $menuList.removeClass('dl-menu-toggle dl-subview');
      $menuList.find('.dl-subviewopen').removeClass('dl-subviewopen');
    }, 300);
  }
});

// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$(document).ready(function() {
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").not(".mySlides a").addClass("image-popup");

  // zoom in/zoom out animations
  if ($(".container").hasClass('fadeOut')) {
    $(".container").removeClass("fadeOut").addClass("fadeIn");
  }
  if ($(".wrapper").hasClass('fadeOut')) {
    $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
  }
  $(".zoombtn").click(function() {
    $(".container").removeClass("fadeIn").addClass("fadeOut");
    $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
  });

  // go up button
  $.goup({
    trigger: 500,
    bottomOffset: 10,
    locationOffset: 20,
    containerRadius: 0,
    containerColor: '#fff',
    arrowColor: '#000',
    goupSpeed: 'normal'
  });

  // Lightbox
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.mySlides a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
});
