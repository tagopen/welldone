(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  $(function() {
    var $item = $('.content__item');
    function step(currentStep) {
      $('.content__hex--active').removeClass('content__hex--active');
      $item
      .removeClass('content__item--active')
      .addClass('content__item--disabled')
      .closest('.content__col')
      .filter(':eq(' + (currentStep) + ')')
      .find('.content__item')
      .addClass('content__item--active')
      .removeClass('content__item--disabled')
      .find('.content__hex').addClass('content__hex--active');
    };

    $item.on('click', function() {
      if ($(this).is('.content__item--active') )
      {
        var currentPosition = $(this).closest('.content__col').index() + 1;
        step(currentPosition);
      }
    });
    step(0);
  });

$(function() {
  $('.content__krug--1').on('click', function() {
    if ($(this).closest('.content__item').is('.content__item--active') ){
      $('.content__down').addClass('content__down--center');
      $('.result__image--2').addClass('result__image--2-active');
    }
  });
});

$(function() {
  $('.content__krug--2').on('click', function() {
    if ($(this).closest('.content__item').is('.content__item--active') ){
    $('.content__down').addClass('content__down--right');
    $('.result__image--2').removeClass('result__image--2-active');
    $('.result__image--3').addClass('result__image--3-active');
    $('.smoke').addClass('smoke--active');
  }
  });
});

$(function() {
  $('.content__krug--3').on('click', function() {
    if ($(this).closest('.content__item').is('.content__item--active') ){
    $('.result__item--1').animate({
      left: -1000,
      opacity: 0
    }, 1000, "linear", function() {
    });
    $('.result__item--2').animate({
      left: 0,
      opacity: 1
    }, 1000, "linear", function() {

      $('.result__image--b').animate({
        opacity: 1
      }, 1300, "linear", function() {

        $('.result__image--c').animate({
          opacity: 1
        }, 800, "linear", function() {

          $('.result__image--d').animate({
            opacity: 1
          }, 500, "linear", function() {

            $('.result__image--e').animate({
              opacity: 1
            }, 1200, "linear", function() {
            });

          });

        });

      });

    });
    
    $('.content__down').addClass('content__down--hidden');
    $('.result__item--1').addClass('result__item--hidden');
  }
  });
});

})(jQuery); // End of use strict



