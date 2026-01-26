// Simple menu toggle (vanilla JS)
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('dl-menu');
  var trigger = menu.querySelector('.dl-trigger');
  var menuList = menu.querySelector('.dl-menu');

  // Add back buttons to submenus
  menu.querySelectorAll('ul.dl-submenu').forEach(function(submenu) {
    if (!submenu.querySelector('.dl-back')) {
      var backItem = document.createElement('li');
      backItem.className = 'dl-back';
      backItem.innerHTML = '<a href="#">back</a>';
      submenu.insertBefore(backItem, submenu.firstChild);
    }
  });

  // Toggle menu open/close on button click
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (menuList.classList.contains('dl-menuopen')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Handle menu item clicks for submenus
  menuList.addEventListener('click', function(e) {
    var link = e.target.closest('li > a');
    if (!link) return;

    var item = link.parentElement;
    var submenu = item.querySelector('ul.dl-submenu');

    // If this item has a submenu, show it
    if (submenu && link.getAttribute('href') === '#') {
      e.preventDefault();
      e.stopPropagation();
      menuList.classList.add('dl-subview');
      item.classList.add('dl-subviewopen');
    }
  });

  // Handle back button clicks
  menuList.addEventListener('click', function(e) {
    var backLink = e.target.closest('.dl-back > a');
    if (!backLink) return;

    e.preventDefault();
    e.stopPropagation();

    var item = backLink.closest('li.dl-subviewopen');
    if (item) {
      item.classList.remove('dl-subviewopen');
    }

    if (!menuList.querySelector('.dl-subviewopen')) {
      menuList.classList.remove('dl-subview');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (menuList.classList.contains('dl-menuopen') && !e.target.closest('#dl-menu')) {
      closeMenu();
    }
  });

  function openMenu() {
    menuList.classList.add('dl-menuopen', 'dl-menu-toggle');
    trigger.classList.add('dl-active');
    setTimeout(function() {
      menuList.classList.remove('dl-menu-toggle');
    }, 300);
  }

  function closeMenu() {
    menuList.classList.remove('dl-menuopen');
    menuList.classList.add('dl-menu-toggle');
    trigger.classList.remove('dl-active');
    setTimeout(function() {
      menuList.classList.remove('dl-menu-toggle', 'dl-subview');
      menuList.querySelectorAll('.dl-subviewopen').forEach(function(item) {
        item.classList.remove('dl-subviewopen');
      });
    }, 300);
  }
});

// Need this to show animation when go back in browser
window.onunload = function() {};

// Zoom in/out animations and lightbox setup
document.addEventListener('DOMContentLoaded', function() {
  // Add lightbox class to all image links
  document.querySelectorAll("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").forEach(function(link) {
    if (!link.closest('.mySlides')) {
      link.classList.add('glightbox');
    }
  });

  // Gallery images
  document.querySelectorAll('.gallery .mySlides a').forEach(function(link) {
    link.classList.add('glightbox');
    link.setAttribute('data-gallery', 'gallery');
  });

  // Initialize GLightbox if available
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    });
  }

  // Zoom in/zoom out animations
  var container = document.querySelector('.container');
  var wrapper = document.querySelector('.wrapper');

  if (container && container.classList.contains('fadeOut')) {
    container.classList.remove('fadeOut');
    container.classList.add('fadeIn');
  }
  if (wrapper && wrapper.classList.contains('fadeOut')) {
    wrapper.classList.remove('fadeOut');
    wrapper.classList.add('fadeIn');
  }

  document.querySelectorAll('.zoombtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (container) {
        container.classList.remove('fadeIn');
        container.classList.add('fadeOut');
      }
      if (wrapper) {
        wrapper.classList.remove('fadeIn');
        wrapper.classList.add('fadeOut');
      }
    });
  });
});

// Go to top button
document.addEventListener('DOMContentLoaded', function() {
  // Create button
  var goUpBtn = document.createElement('div');
  goUpBtn.id = 'goup-btn';
  goUpBtn.innerHTML = '<span>&#9650;</span>';
  goUpBtn.style.cssText = 'position:fixed;bottom:10px;right:20px;width:40px;height:40px;background:#fff;color:#000;text-align:center;line-height:40px;cursor:pointer;opacity:0;visibility:hidden;transition:opacity 0.3s;z-index:9999;border-radius:0;box-shadow:0 2px 5px rgba(0,0,0,0.2);';
  document.body.appendChild(goUpBtn);

  // Show/hide on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      goUpBtn.style.opacity = '1';
      goUpBtn.style.visibility = 'visible';
    } else {
      goUpBtn.style.opacity = '0';
      goUpBtn.style.visibility = 'hidden';
    }
  });

  // Scroll to top on click
  goUpBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
