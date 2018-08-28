import sayHello from './lib/sayHello.js';
// import './lib/jquery.magnific-popup.min.js';
import 'magnific-popup';

sayHello();


$(document).ready(function() {

  // Popup
  $('.thumbs').each(function(num_magnific) {
    $(this).find('.thumbs__link').magnificPopup({
      src: '<div class="white-popup">Dynamically created popup</div>',
      type: 'image',
      closeBtnInside: false,
      mainClass: 'mfp-dark-close-button mfp-with-40-margin my-mfp-slide-bottom mfp-fade mfp-no-margins  mfp-img-mobile',

      image: {
        verticalFit: true,
        titleSrc: function(item) {
          var caption = item.el.attr('title');
          return caption;
        }
      },
      gallery: {
        enabled: true, // set to true to enable gallery

        preload: [0,2], // read about this option in next Lazy-loading section

        // navigateByImgClick: true,

        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
	  }
    });
  });

// mfp-with-zoom

  // $('.thumbs').magnificPopup({
	 //   type: 'iframe',
	 //   iframe: {
	 //       markup: '<div class="mfp-iframe-scaler your-special-css-class">'+
	 //                        '<div class="mfp-close"></div>'+
	 //                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>            </iframe>'+
	 //                    '</div>'
	 //   }   

  // });




});
