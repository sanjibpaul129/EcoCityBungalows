jQuery(function($) {
  // Community menu
  var checkMobile = window.matchMedia("(max-width: 767px)");
  var w = $(document).width();
  var h = $(document).height();
  $(".communities-menu").css('width',w);
  $(".communities-menu").css('height',h);

  $('.communities-tab').click(function(){

    $('.communities-menu').width( $(window).width() );
    $('.communities-menu').height( $(window).height() );
    //$('.communities-menu').css( {'overflow':'auto'} );

    $('.communities-menu').slideToggle();
    $('.communities-tab').toggleClass('active');
    event.stopPropagation();
    return false;
  });

  $('.share-btn').click(function(){

    $('.sharing-options').slideToggle();
    $('.share-btn').toggleClass('active');
    event.stopPropagation();
    return false;

  });


/* This section for max price to change onclick min price which does not work on Safari */
$.fn.showOption = function() {
this.each(function() {
    if( this.tagName == "OPTION" ) {
        var opt = this;
        if( $(this).parent().get(0).tagName == "SPAN" ) {
            var span = $(this).parent().get(0);
            $(span).replaceWith(opt);
            $(span).remove();
        }
        opt.disabled = false;
        $(opt).show();
    }
});
return this;
}
$.fn.hideOption = function() {
this.each(function() {
    if( this.tagName == "OPTION" ) {
        var opt = this;
        if( $(this).parent().get(0).tagName == "SPAN" ) {
            var span = $(this).parent().get(0);
            $(span).hide();
        } else {
            $(opt).wrap("span").hide();
        }
        opt.disabled = true;
    }
});
return this;
}
  /* End this section */

/* Initialize Swiper */
window.popupGallery, window.choosenSwiperSlide;
        $('.open-global-swiper').on('click', function () {
            var choosenSwiperSlide = $(this).data('swiper-index');
            globalSwiper.slideTo(choosenSwiperSlide);
            console.log(choosenSwiperSlide);
            $('.global-swiper-light-box,.close-global-swiper').fadeIn();
            $('body').addClass('no-scroll');            
        });


        $('.close-global-swiper').on('click', function () {
            $('.global-swiper-light-box,.close-global-swiper').fadeOut();
            $('.global-swiper-light-box').attr('aria-hidden','true');
            //$('.hamburger-holder').fadeIn();
            $('body').removeClass('no-scroll');
            //$('.page-wrapper').attr('aria-hidden', 'false');
        });

        var globalSwiper = new Swiper('.global-swiper-container', {
            loop: true,
            observer: true,
            observeParents: true,
            keyboard: {
                enabled: false,
                onlyInViewport: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
            },
        });
        $('.swiper-slide').attr('aria-hidden', 'true');
        $('.swiper-slide-active').attr('aria-hidden', 'false');

        globalSwiper.on('slideChangeTransitionStart', function () {
            $('.swiper-slide').attr('aria-hidden', 'true');
            $('.swiper-slide-active').attr('aria-hidden', 'false');
        });

$( ".container-image" ).hover(
  function() {
    $( ".gallery-button-prev" ).css('opacity', '1');
    $( ".gallery-button-next" ).css('opacity', '1');
  }, function() {
    $( ".gallery-button-prev" ).css('opacity', '0');
  $( ".gallery-button-next" ).css('opacity', '0');
  }
);
$( ".gallery-button-prev" ).hover(function() {
  $( ".gallery-button-prev" ).css('opacity', '1');
});
$( ".gallery-button-next" ).hover(function() {
  $( ".gallery-button-next" ).css('opacity', '1');
});

/* Principal Officers Accordion scroll to position */
  $('.awards-accordion .collapse').on('show.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  var $open = $($(this).data('parent')).find('.collapse.show');
  
  var additionalOffset = 0;
  if($card.prevAll().filter($open.closest('.card')).length !== 0)
  {
    additionalOffset =  $open.height();
  }
  $('html,body').animate({
    scrollTop: $card.offset().top - additionalOffset
  }, 1000);
});

$('.constructions-update-swiper').on('click', function () {
console.log("Show Construction Updates Slider");
/* Initialize Swiper for Construction Updates */
var constructionUpdateSwiper = new Swiper('.const-updates-swiper-container', {
            loop: true,
            observer: true,
            observeParents: true,
            keyboard: {
                enabled: false,
                onlyInViewport: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
            },
        });
/* End Swiper for Construction updates */
var slideToOpen = $(this).data('swiper-index');
constructionUpdateSwiper.slideTo(slideToOpen);
$('.constructionupdate-swiper-light-box,.close-const-updates-swiper').fadeIn();
            $('body').addClass('no-scroll');  
});
/* End Initialize Swiper */
/* Close Construction updates */
$('.close-const-updates-swiper').on('click', function () {
            $('.constructionupdate-swiper-light-box,.close-const-updates-swiper').fadeOut();
            $('.constructionupdate-swiper-light-box').attr('aria-hidden','true');
            //$('.hamburger-holder').fadeIn();
            $('body').removeClass('no-scroll');
            //$('.page-wrapper').attr('aria-hidden', 'false');
        });
/* Close Construction updates */
  $(document.body).on("click", function (event) {
    var el = event.srcElement;
    if (!$(el).hasClass("trigger") && (!$(el).is("a")))
    $(".communities-menu").slideUp();
  });

  $(document.body).on("click", function (event) {
    var el = event.srcElement;
    if (!$(el).hasClass("trigger") && (!$(el).is("a")))
    $(".sharing-options").slideUp();
  });



    $(document).ready(function(){
    /* Initialize animation on scroll */
    AOS.init();
    
      var min_price_selection;
      var currentItem;
      var itemsFound;
      var min_price_selection;
      var max_price_selection;
        //$('.price-validation-error').hide();

        //$('#select').append($('<option>', {value:1, text:'One'}));

        if($('input[name="comm[]"]:checked').length > 0)
          {
            $('.community-selection').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#clear-community').addClass('active-clear');
            $('#community-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#mobile-clear-community').addClass('active-clear');
          }
        if($('input[name="bed[]"]:checked').length > 0)
          {
            $('.bedroom-selection').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#clear-bedrooms').addClass('active-clear');
            $('#bedroom-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#mobile-clear-bedrooms').addClass('active-clear');
          }
        if($('select[name="max-price"]').val() > 0)
          {
            if($('select[name="max-price"]').val() == 10000000 & $('select[name="min-price"]').val() == 0)
            {
              $('.home-hero-section .price-range-selection').find('span.search-val').css({ 'color': '#232323;' });
            } 
            else
            {
              if($('select[name="min-price"]').val() > 0)
              {
                $('.price-range-selection').find('span.search-val').css({ 'color': '#CDAB6E' });
                $('#clear-price').addClass('active-clear');
                $('#mobile-clear-price').addClass('active-clear');
                $('#price-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' });
              }
            } 
          }
        if($('input[name="p-type[]"]:checked').length > 0)
          {
            $('.property-type-selection').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#clear-property').addClass('active-clear');
            $('#property-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' });
            $('#mobile-clear-property').addClass('active-clear');            
          }

           // ########## Enable and disable Clear button
          $('input[name="comm[]"').on('change', function() { 
            //console.log($('#prop_search_form input[name="comm[]"]:checked').length);
            if (checkMobile.matches) {
                console.log('checkMobile.matches ==============>' + checkMobile.matches);
                console.log($('#prop_search_mobile_form input[name="comm[]"]:checked').length);
                if($('#prop_search_mobile_form input[name="comm[]"]:checked').length < 1 )
                {                  
                  $('#mobile-clear-community').removeClass('active-clear');
                }
                else
                {
                  $('#mobile-clear-community').addClass('active-clear');
                } 
            }
            else {
                if($('#prop_search_form input[name="comm[]"]:checked').length < 1 )
                {
                  //console.log($('#prop_search_form input[name="comm[]"]:checked').length);
                  $('#clear-community').removeClass('active-clear');
                }
                else
                {
                  $('#clear-community').addClass('active-clear');
                }
            }         
      });
          $('input[name="bed[]"').on('change', function() {
          if (checkMobile.matches) { 
              if($('#prop_search_mobile_form input[name="bed[]"]:checked').length < 1 )
                {                  
                  $('#mobile-clear-bedrooms').removeClass('active-clear');
                }
                else
                {
                  $('#mobile-clear-bedrooms').addClass('active-clear');
                }
          }
          else
          {
              if($('#prop_search_form input[name="bed[]"]:checked').length < 1 )
                {                  
                  $('#clear-bedrooms').removeClass('active-clear');
                }
                else
                {
                  $('#clear-bedrooms').addClass('active-clear');
                }
          }
      });
          $('input[name="p-type[]"').on('change', function() { 
          if (checkMobile.matches) { 
              if($('#prop_search_mobile_form input[name="p-type[]"]:checked').length < 1 )
                {                  
                  $('#mobile-clear-property').removeClass('active-clear');
                }
                else
                {
                  $('#mobile-clear-property').addClass('active-clear');
                }
          }
          else
          {
              if($('#prop_search_form input[name="p-type[]"]:checked').length < 1 )
                {                  
                  $('#clear-property').removeClass('active-clear');
                }
                else
                {
                  $('#clear-property').addClass('active-clear');
                }
          }
      });

          $('select[name="min-price"]').on('change', function() {
            console.log('++++++++++++Changing Min Price');
            if($(this).val() > 0)
            {
              $('#clear-price').addClass('active-clear');
              $('#mobile-clear-price').addClass('active-clear');
            }
            else
            {
                $('#clear-price').removeClass('active-clear');
                $('#mobile-clear-price').removeClass('active-clear');
            }
            /* Onchange of min-price populate max price from min price onwards */
            min_price_selection = parseInt($(this).children("option:selected").val());
            //console.log(min_price_selection);
            $('select[name="max-price"] option').each(function() {
              $(this).showOption();
              currentItem = parseInt($(this).val());
              //Console.log(currentItem);
              if (currentItem < min_price_selection) {
              $(this).hideOption();
            }

            });
            /* END Onchange of min-price populate max price from min price onwards */
          });

          $('select[name="max-price"]').on('change', function() {
            console.log('++++++++++++Changing Max Price');
            if($(this).val() > 0)
            {
              $('#clear-price').addClass('active-clear');
              $('#mobile-clear-price').addClass('active-clear');
            }
            else
            {
              $('#clear-price').removeClass('active-clear');
              $('#mobile-clear-price').removeClass('active-clear');
            }
            /* Onchange of min-price populate max price from min price onwards */
            max_price_selection = parseInt($(this).children("option:selected").val());
            //console.log(max_price_selection);
            $('select[name="min-price"] option').each(function() {
              $(this).showOption();
              currentItem = parseInt($(this).val());
              //console.log(currentItem);
              if (currentItem > max_price_selection) {
              $(this).hideOption();
            }

            });
            /* END Onchange of min-price populate max price from min price onwards */
          });
          // ########## END Enable and disable Clear button
    });

  var pid="";
  var desktop_screen_size=window.matchMedia("(min-width: 1025px)");
  var screen_size=window.matchMedia("(max-width: 1024px)");
  $('.community-selection label.search-fld').click(function(){
    pid = $(this).parent().attr("id");    
      if(pid=="community-selection-wrapper")
      {
        if (screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 250 }, 600); 
            console.log("desktop_screen_size");
          }
        if (desktop_screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 440 }, 600); 
            console.log("desktop_screen_size");
          }
      }
     
    /* hide the other toggles */
    $('.price-range-selection .select-sec-options').hide("fast");
    $('.price-range-selection label.search-fld').removeClass("active");
    $('.property-type-selection .select-sec-options').hide("fast");
    $('.property-type-selection label.search-fld').removeClass("active");
    $('.bedroom-selection .select-sec-options').hide("fast");
    $('.bedroom-selection label.search-fld').removeClass("active");
    /* hide the other toggles */
    $('.community-options').slideToggle();
    $('.community-selection label.search-fld').toggleClass('active');
    $('.community-selection label.search-fld i.dropdown-icon').toggleClass('fa-angle-up fa-angle-down');
    return false;

  });

  $('.bedroom-selection label.search-fld').click(function() {
    pid = $(this).parent().attr("id");        
    if(pid=="bedroom-selection-wrapper")
      {
        if (screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 250 }, 600); 
            console.log("desktop_screen_size");
          }
        if (desktop_screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 440 }, 600); 
            console.log("desktop_screen_size");
          }
      }
        
    /* hide the other toggles */
    $('.price-range-selection .select-sec-options').hide("fast");
    $('.price-range-selection label.search-fld').removeClass("active");
    $('.property-type-selection .select-sec-options').hide("fast");
    $('.property-type-selection label.search-fld').removeClass("active");
    $('.community-options').hide("fast");
    $('.community-selection label.search-fld').removeClass("active");
    /* hide the other toggles */
    $('.bedroom-selection .select-sec-options').slideToggle();
    $('.bedroom-selection label.search-fld').toggleClass('active');
    $('.bedroom-selection label.search-fld i.dropdown-icon').toggleClass('fa-angle-up fa-angle-down');
    return false;
  });

  $('.price-range-selection label.search-fld').click(function() {
    pid = $(this).parent().attr("id");    
    if(pid=="price-range-selection-wrapper")
    {
      if (screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 250 }, 600); 
            console.log("desktop_screen_size");
          }
        if (desktop_screen_size.matches)
          {
            $('html, body').animate({ scrollTop: 440 }, 600); 
            console.log("desktop_screen_size");
          }
    }
        
    /* hide the other toggles */
    $('.bedroom-selection .select-sec-options').hide("fast");
    $('.bedroom-selection label.search-fld').removeClass("active");
    $('.property-type-selection .select-sec-options').hide("fast");
    $('.property-type-selection label.search-fld').removeClass("active");
    $(".community-options").hide("fast");
    $('.community-selection label.search-fld').removeClass("active");
    /* hide the other toggles */
    $('.price-range-selection .select-sec-options').slideToggle();
    $('.price-range-selection label.search-fld').toggleClass('active');
    $('.price-range-selection label.search-fld i.dropdown-icon').toggleClass('fa-angle-up fa-angle-down');
    return false;

  });

  $('.property-type-selection label.search-fld').click(function() {
    var pid = $(this).parent().attr("id");
    console.log(pid);
    
    /* hide the other toggles */
    $('.bedroom-selection .select-sec-options').hide("fast");
    $('.bedroom-selection label.search-fld').removeClass("active");
    $('.price-range-selection .select-sec-options').hide("fast");
    $('.price-range-selection label.search-fld').removeClass("active");
    $(".community-options").hide("fast");
    $('.community-selection label.search-fld').removeClass("active");
    /* hide the other toggles */
    $('.property-type-selection .select-sec-options').slideToggle();
    $('.property-type-selection label.search-fld').toggleClass('active');
    $('.property-type-selection label.search-fld i.dropdown-icon').toggleClass('fa-angle-up fa-angle-down');
    return false;

  });
  
  $('.apply-front-page').click(function(e) {
    //e.preventDefault();
    //console.log('Apply Button Click');
    var selected_id = $(this).attr("id");
    var checkedBoxes;
    var selected_msg_label = '';
    var bedrooms_dropdown_array = [];
    var bedrooms_dropdown_string = "";
    var single_string = "";
    var selectedPriceRange = "";
    var max_format_price;
    var min_format_price;

    /******** Communities select dropdown ************/
    if(selected_id == 'community-dropdown' || selected_id == 'mobile-community-dropdown')
    {
        //console.log('community-dropdown');
        if(selected_id == 'mobile-community-dropdown')
        {
          $('#communityModal').modal('hide');
        }
        else
        {
          $('.community-selection label.search-fld').click();
        }
        checkedBoxes = $('input[name="comm[]"]:checked').length;
        if(checkedBoxes > 0)
        {
            if(checkedBoxes == 1)
            {
              selected_msg_label = checkedBoxes + ' Community';
            }
            else
            {
              selected_msg_label = checkedBoxes + ' Communities';
            }
            if(selected_id == 'mobile-community-dropdown')
            {
              $('#community-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selected_msg_label);
            }
            if(selected_id == 'community-dropdown')
            {
              $('.community-selection').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selected_msg_label);
            }
        }
        //Console.log(selected_msg_label);   
    }
    
    /* End Communities select dropdown */
    /* Bedrooms select dropdown */
    if(selected_id == 'bedrooms-dropdown' || selected_id == 'mobile-bedrooms-dropdown')
    {
      //Console.log('Bedrooms Selection');
      if(selected_id == 'mobile-bedrooms-dropdown')
        {
          $('#bedroomsModal').modal('hide');
        }
        else
        {
          $('.bedroom-selection label.search-fld').click();
        }

      if( $('input[name="bed[]"]:checked').length > 0)
      {
        //console.log('bedrooms-dropdown');
        $.each($('input[name="bed[]"]:checked'), function(){
                  single_string = $(this).val().toString().replace(' Bedrooms','');
                  single_string = single_string.replace(' Bedroom',''); 
                  bedrooms_dropdown_array.push(single_string);
              });
        bedrooms_dropdown_string = bedrooms_dropdown_array.join(", ");
        //bedrooms_dropdown_string = bedrooms_dropdown_array.toString();
        if(bedrooms_dropdown_string =='1')
        {
          bedrooms_dropdown_string = bedrooms_dropdown_array + ' Bedroom';
        }
        else
        {
          bedrooms_dropdown_string = bedrooms_dropdown_array + ' Bedrooms';
        }
        bedrooms_dropdown_string = bedrooms_dropdown_string.replace(/,/g, ", ");
        //Console.log(bedrooms_dropdown_string);  
        if(selected_id == 'bedrooms-dropdown')
          {
            $('.bedroom-selection').find('span.search-val').css({ 'color': '#CDAB6E' }).text(bedrooms_dropdown_string); 
          }
        if(selected_id == 'mobile-bedrooms-dropdown')
          {
            $('#bedroom-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' }).text(bedrooms_dropdown_string); 
          }
      }
      
    }
    /* End Bedrooms select dropdown */
    /* Start Price Range dropdown */
    if(selected_id == 'price-dropdown' || selected_id == 'mobile-price-dropdown')
    {
      $('#priceModal').modal('hide');
      if($('select[name="min-price"]').val() == 0 & $('select[name="max-price"]').val()== 10000000)
      {
        console.log('============= Any price range ========================');
        selectedPriceRange ='Any';
          if(selected_id == 'price-dropdown')
          {
              $('.price-range-selection').find('span.search-val').css({ 'color': '#232323' }).text(selectedPriceRange);                    
          }  
          if(selected_id == 'mobile-price-dropdown')
          {
            $('#price-for-mobile').find('span.search-val').css({ 'color': '#232323' }).text(selectedPriceRange); 
          }
      }
      else
      {
        selectedPriceRange ='AED ' + parseInt($('select[name="min-price"]').val()).toLocaleString() + ' - ' + parseInt($('select[name="max-price"]').val()).toLocaleString();
        //console.log(selectedPriceRange);
        if(selected_id == 'price-dropdown')
          {
              $('.price-range-selection').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selectedPriceRange);                    
          }  
          if(selected_id == 'mobile-price-dropdown')
          {
            $('#price-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selectedPriceRange); 
          }
      }
      
      $('.price-range-selection label.search-fld').click();  
    }
    /* End Price Range dropdown */
    /* Property Type dropdown */
    if(selected_id =='property-dropdown' || selected_id == 'mobile-property-dropdown')
    {
      //Console.log('property-dropdown');
      $('#propertyTypeModal').modal('hide');
      checkedBoxes = $('input[name="p-type[]"]:checked').length;
      selected_msg_label = '';
        if(checkedBoxes > 0)
        {
            if(checkedBoxes == 1)
            {
              selected_msg_label = checkedBoxes + ' Type';
            }
            if(checkedBoxes > 1)
            {
              selected_msg_label = checkedBoxes + ' Types';
            }
            
            if(selected_id =='property-dropdown')
            {
                $('.property-type-selection label.search-fld').click();
                $('.property-type-selection').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selected_msg_label);
            }
            if(selected_id == 'mobile-property-dropdown')
            {
                $('#property-for-mobile').find('span.search-val').css({ 'color': '#CDAB6E' }).text(selected_msg_label);
            }
        } 
        
    }
    /* End Property Type dropdown */
  });

  /* Clear Function  */
  $('.clear-selection').click(function(e) {
    //e.preventDefault();
    $(this).removeClass('active-clear');
    var selected_id = $(this).attr("id");
    if(selected_id == 'clear-community')
    {
      $('#prop_search_form input[name="comm[]"]:checkbox').prop('checked',false);
      $('.community-selection').find('span.search-val').css({ 'color': '#232323' }).text('All Communities');
      //$('#clear-community').removeClass('active-clear');
    }
    if(selected_id == 'mobile-clear-community')
    {
      $('#prop_search_mobile_form input[name="comm[]"]:checkbox').prop('checked',false);
      //$('.community-selection').find('span.search-val').css({ 'color': '#232323' }).text('All Communities');
      //$('#clear-community').removeClass('active-clear'); 
    }
     if(selected_id == 'clear-bedrooms')
    {
      $('#prop_search_form input[name="bed[]"]:checkbox').prop('checked',false);
      $('.bedroom-selection').find('span.search-val').css({ 'color': '#232323' }).text('Any');
      //$('#clear-bedrooms').removeClass('active-clear');
    }
    if(selected_id == 'mobile-clear-bedrooms')
    {
      $('#prop_search_mobile_form input[name="bed[]"]:checkbox').prop('checked',false);
    }
    //$('select option:contains("it\'s me")').prop('selected',true);
    if(selected_id == 'clear-price' || selected_id == 'mobile-clear-price')
    {
      //Console.log('clear price filter');
      $('select[name="min-price"] option[value="0"]').prop("selected",true);
      $('select[name="max-price"] option[value="10000000"]').prop("selected",true);
      $('.price-range-selection').find('span.search-val').css({ 'color': '#232323' }).text('Any');
      //$('#clear-price').removeClass('active-clear');
    }
    if(selected_id =='clear-property')
    {
      $('#prop_search_form input[name="p-type[]"]:checkbox').prop('checked',false);
      $('.property-type-selection').find('span.search-val').css({ 'color': '#232323' }).text('Any');
      //$('#clear-property').removeClass('active-clear');
    }
    if(selected_id == 'mobile-clear-property')
    {
        $('#prop_search_mobile_form input[name="p-type[]"]:checkbox').prop('checked',false);
    }
  });


  // Slick Slider RTL Support
  function rtl_slick(){
    if ($('body').hasClass("rtl")) {
       return true;
    } else {
       return false;
    }
  }

  // Featured Communities Slider
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    arrows: true,
    rtl: rtl_slick(),
    nextArrow: '<a href="#" class="slick-next">NEXT</a> <a href="#" class="slick-next-2">NEXT 2</a> ',
    prevArrow: '<a href="#" class="slick-prev">PREV</i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '15px',
        }
      }
    ],

  });
	
	
	// Promotions Slider on Home Page
  $('.slider-promotions').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    arrows: true,
    rtl: rtl_slick(),
    nextArrow: '<a href="#" class="slick-next">NEXT</a> <a href="#" class="slick-next-2">NEXT 2</a> ',
    prevArrow: '<a href="#" class="slick-prev">PREV</i>',
  });
	

    // Register your interest form
  function initRYIF_1(){    
    $('#gform_1 #field_1_6.phone-intl-code select').find('option').each(function() {
      $(this).append(" " +$(this).val()); 
    });
    $('#gform_1 #field_1_6.phone-intl-code select').change(function(){
      var selectedCountry = $(this).children("option:selected").val();
      $( '#gform_1 #gfield_description_1_6 .phone-mask').html( selectedCountry );
    });
    $('#gform_1 #gfield_description_1_6 .phone-mask').append( $('#gform_1 #field_1_6.phone-intl-code select').val() );
  }

   function initRYIF_4(){
    $('#gform_6 #field_6_32.phone-intl-code select').find('option').each(function() {
      $(this).append(" " +$(this).val()); 
    });
    $('#gform_6 #field_6_32.phone-intl-code select').change(function(){
      var selectedCountry = $(this).children("option:selected").val();
      console.log(selectedCountry)
      $( '#gform_6 #gfield_description_6_32 .phone-mask').html( selectedCountry );
    });
    $('#gform_6 #gfield_description_6_32 .phone-mask').append( $('#gform_6 #field_6_32.phone-intl-code select').val() );
  
    $('#gform_6 #field_6_6.booking-phone-intl-code select').find('option').each(function() {
      $(this).append(" " +$(this).val()); 
    });
    $('#gform_6 #field_6_6.booking-phone-intl-code select').change(function(){
      var selectedCountry = $(this).children("option:selected").val();
      console.log(selectedCountry)
      $( '#gform_6 #gfield_description_6_6 .phone-mask').html( selectedCountry );
    });
    $('#gform_6 #gfield_description_6_6 .phone-mask').append( $('#gform_6 #field_6_6.booking-phone-intl-code select').val() );
  }

  jQuery(document).on('gform_post_render', function(event, form_id, current_page){
    console.log(form_id)
    if($('#gform_1').length == 0)
    {
      return;
    }
    if( form_id == 1 )
    {
      initRYIF_1();
    }
    // code to trigger on form or form page render
    if($('#gform_6').length == 0)
      return;
    if( form_id == 6 )
    {
      initRYIF_4();
      if ( $('div.validation_error').length > 0) 
      {
        console.log('validation errors in form 6');
        $(".booking-overlay").hide();
        console.log('Hiding Overlay Now!');
      }
    }
  });

  initRYIF_1();
  initRYIF_4();

  // MMenu for mobile
  const menu = new Mmenu( document.querySelector( '#mobile_nav' ),
    {
      navbars : [
        {
          content   : [ 'close' ]
        },{
          content   : [ 'prev' ]
        },
      ]
    }
  );


  $("#mobile_nav").find( ".mm-navbar__btn.mm-btn_prev" ).append( "Back to Menu" );
  
  const api = menu.API;
  api.bind( "close:after", function() {
      api.closeAllPanels();
  });


  $('.get-touch-btn').click(function( ev ) {
    ev.preventDefault();
    if ($("#mobile_nav").hasClass( "mm-menu_opened" )){
      api.close();
    } 
  });

/*
$('.close-collapse-mobile-view').click(function() {
    console.log('Close the collapse now')
    //$('.unit-details-collapse').removeClass('show');
    //$('.unit-details-collapse').removeClass('hide');
    $(this).closest().find('.detail-units').attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'
});
  });
  */

  // To style custom select
  $('.emr-custom-select').selectpicker();
  $(".prop-sort-cont .filter-option-inner-inner").prepend("sort by ");
  


/* $('.sort-by').click(function(sortval){
    $(this).find('span.icon-stack i.sort-arrows-up').css('opacity', '0.2');
    $(this).find('span.icon-stack i.sort-arrows-down').css('opacity', '1');
}); */
$("#gform_fields_1 .ginput_container_email #input_1_2").attr('maxlength','80');
$("#gform_fields_2 .ginput_container_email #input_2_1").attr('maxlength','80');

// Gravity Forms
// Disable past dates in Expiry Date Fields
gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
    if ( formId == 6 ) {
      if( fieldId == 21 ||  fieldId == 23 ||  fieldId == 25 )
      {
        optionsObj.minDate = 0;
      }        
    }
    return optionsObj;
});
gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
    if ( formId == 6 ) {
      if( fieldId == 20)
      {
        optionsObj.maxDate = 0;
      }        
    }
    return optionsObj;
});

$('#gform_submit_button_6').click(function() {
  $(".booking-overlay").show();
  console.log('Showing Overlay Now!');
});
$(document).on("click", ".get-touch-btn", function() {
  var formName = $(this).attr('data-formname');
  if (formName != '') {
      $('#input_1_24').val(formName);
      var ryi = $('#registerModal').attr('data-ryi');
      var git = $('#registerModal').attr('data-git');
      if (formName == 'Register your Interest') {
          if (ryi != '')
              $('#registerModal .gform_heading .gform_title').text(ryi);
      } else {
          if (ryi != '')
              $('#registerModal .gform_heading .gform_title').text(git);
      }
  }
});
});

/*! contentloaded.min.js - https://github.com/dperini/ContentLoaded - Author: Diego Perini - License: MIT */
function contentLoaded(b,i){var j=false,k=true,a=b.document,l=a.documentElement,f=a.addEventListener,h=f?'addEventListener':'attachEvent',n=f?'removeEventListener':'detachEvent',g=f?'':'on',c=function(d){if(d.type=='readystatechange'&&a.readyState!='complete')return;(d.type=='load'?b:a)[n](g+d.type,c,false);if(!j&&(j=true))i.call(b,d.type||d)},m=function(){try{l.doScroll('left')}catch(e){setTimeout(m,50);return}c('poll')};if(a.readyState=='complete')i.call(b,'lazy');else{if(!f&&l.doScroll){try{k=!b.frameElement}catch(e){}if(k)m()}a[h](g+'DOMContentLoaded',c,false);a[h](g+'readystatechange',c,false);b[h](g+'load',c,false)}}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getRefQueryParam(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getUTMsFromQueryParam() {
    return {
        utm_source: getRefQueryParam("utm_source") || '',
      utm_medium: getRefQueryParam("utm_medium") || '',
      utm_content: getRefQueryParam("utm_content") || '',
      utm_campaign: getRefQueryParam("utm_campaign") || '',
      utm_term: getRefQueryParam("utm_term") || ''
    }
}

function persistUTMs() {
  if(getRefQueryParam("utm_source") || getRefQueryParam("utm_medium") || getRefQueryParam("utm_content") || getRefQueryParam("utm_campaign") || getRefQueryParam("utm_term")) {
    setCookie('emr_utms', JSON.stringify(getUTMsFromQueryParam()), 7);
  }
}

function getUTMs() {
  var emr_utms = {};
      try {
          emr_utms = JSON.parse(getCookie("emr_utms")) || {};
      } catch(e) { };

  return (emr_utms && (typeof emr_utms === "object") && emr_utms.hasOwnProperty("utm_source")) ? emr_utms : getUTMsFromQueryParam();
}

contentLoaded(window, persistUTMs);

$(".gform_button").click(function() {
    if ($(this).attr('data-init') == 'Y')
        return;
    initCaptchaListener();
    $(this).attr('data-init', 'Y');
});

/* Click event for after error captcha */
$(document).on("click", ".gform_button", function() {
  initCaptchaListener();
});

function initCaptchaListener() {

    // find the open reCaptcha window
    HTMLCollection.prototype.find = Array.prototype.find

    var frame = document.getElementsByTagName('iframe');

    for (var i = 0; i < frame.length; i++) {
        if (String(frame[i].getAttribute('src')).includes('google.com/recaptcha/api2/bframe')); {
            var recaptchaWindow = frame[i].parentNode.parentNode;
            if (!isHidden(recaptchaWindow))
                new MutationObserver(x => recaptchaWindow.style.opacity == 0 && onClose())
                .observe(recaptchaWindow, {
                    attributes: true,
                    attributeFilter: ['style']
                })
        }
    }
}

function isHidden(el) {
    return (el.offsetParent === null)
}

function initReinitiatedCaptchaListener() {
    HTMLCollection.prototype.find = Array.prototype.find

    mainiframedom = document.getElementsByTagName('iframe');
    lastIndex = mainiframedom.length;
    var lastelement = mainiframedom[lastIndex - 1].getAttribute("name");
    var recaptchaWindow = document.getElementsByName(lastelement)[0].parentNode.parentNode;
    new MutationObserver(x => recaptchaWindow.style.opacity == 0 && onClose())
        .observe(recaptchaWindow, {
            attributes: true,
            attributeFilter: ['style']
        })
}


function onClose() {
  $('.gform_ajax_spinner').hide();
  $('.booking-overlay').hide();
}
$('#gform_1').submit(function () {
  setTimeout(function(){ $('.gform_ajax_spinner').show(); }, 600);
});