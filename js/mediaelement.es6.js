(function ($, Drupal) {
  Drupal.behaviors.mediaelement = {
    attach(context, settings) {
      $('.mediaelementjs', context)
        .once('mediaelement')
        .each(function () {
          $(this).mediaelementplayer();
        });
    },
  };
}(jQuery, Drupal));
