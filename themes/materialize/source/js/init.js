(function ($) {
  $(function () {
    // Init button collapse in mobile mode
    $('.button-collapse').sideNav();
    // Tracking all heading
    $('h1, h2, h3, h4, h5, h6').scrollSpy();
    // Active side nav item
    var currentSideNavItem = $('#side-nav').find('a[href="' + window.location.pathname + '"]');
    currentSideNavItem.parent().parent().parent().prev().click();
    currentSideNavItem.parent().addClass('active');
    // Play sound after sound
    var audios = document.querySelectorAll('audio');
    audios.forEach(function (audio, index) {
      audio.onplay = function () {
        audios.forEach(function (audio2) {
          if (audio !== audio2) {
            audio2.pause();
            audio2.currentTime = 0;
          }
        });
      };
      audio.onended = function () {
        if (index < audios.length - 1) {
          audios[index + 1].play();
        }
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
