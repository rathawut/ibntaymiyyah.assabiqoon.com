(function ($) {
  $(function () {
    $('.button-collapse').sideNav();
    $('h1, h2, h3, h4, h5, h6').scrollSpy();
    var currentSideNavItem = $('#side-nav').find('a[href="' + window.location.pathname + '"]');
    currentSideNavItem.parent().parent().parent().prev().click();
    currentSideNavItem.parent().addClass('active');
  }); // end of document ready
})(jQuery); // end of jQuery name space
