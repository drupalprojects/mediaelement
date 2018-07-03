'use strict';

(function ($, Drupal) {
  Drupal.behaviors.mediaelement = {
    attach: function attach(context, settings) {
      $('.mediaelementjs', context).once('mediaelement').each(function () {
        $(this).mediaelementplayer();
      });
    }
  };
})(jQuery, Drupal);
