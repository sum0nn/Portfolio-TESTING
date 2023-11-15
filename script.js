$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("navbar-anim");
    } else {
      $(".navbar").removeClass("navbar-anim");
    }
  });
});

// Start automatic sliding after a delay (e.g., 3 seconds)
setTimeout(function () {
  $(".carousel").carousel({
    interval: 2000, // Set the interval for automatic sliding
  });
}, 3000);
