window.is_ie = /MSIE|Trident/i.test(navigator.userAgent);
window.is_iphone = /iPhone|iPod/i.test(navigator.userAgent);
window.is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
window.isTouchDevice = 'ontouchstart' in document.documentElement;

window.Colors = window.Colors || {};

$(document).ready(function() {
  Colors.initIE();
  Colors.initiOS();
  Colors.initPlaceholders();
  Colors.initEasings();
  Colors.init();
});

Colors.initIE = function(){
  window.isLTie9 = $("html").hasClass("lt-ie9");
  if (navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
    $("html").addClass("ie");
  }
};

Colors.initiOS = function(){
  if(window.is_ios && !window.MSStream){
    // fix for safari ios 9 viewport problem
    // https://forums.developer.apple.com/thread/13510
    document.querySelector('meta[name=viewport]').setAttribute(
      'content', 
      'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no'
    );
  }
}

Colors.init = function(){
  Colors.initListeners();
  Colors.initHeader();
  Colors.initHomePage();
  Colors.initProductPage();
  Colors.initLoginPage();
  Colors.initAddressesPage();
  Colors.initCollections();
  Colors.initCollection();
  Colors.initFooter();
  Colors.loadFonts();
};

Colors.loadFonts = function(){
  var fonts = window.fonts || [];
  if(fonts.length && !window.isLTie9){
    WebFontConfig = {
      google: {families: fonts},
      classes: false,
      active: function(){
        Colors.onFontsLoaded(); 
      },
      inactive: function(){
        console.log("Error loading the fonts.");
        Colors.onFontsLoaded();
      },
      fontinactive: function(familyName, fvd) {
        console.log("Error: font '" + familyName + "' was not loaded.");
      },
      timeout: 3000
    };
    WebFont.load(WebFontConfig);
  } else {
    Colors.onFontsLoaded();
  }
};

Colors.onFontsLoaded = function(){
  Colors.initShapes();
  $('body').addClass('fonts-loaded')
  $(document).trigger('onfontsloaded');
};

Colors.initShapes = function(){
  if(window.isLTie9) return;
  
  $('.shape:not(.shaped)').each(function(index){
    var $this = $(this);
    if($this.hasClass('square')){
      $this
        .addClass('shaped')
        .find('br')
        .replaceWith(' ');
    }else if($this.hasClass('circle')){
      Colors.circlify($this, index);
    }else if ($this.hasClass('hexagon')){
      Colors.hexagonify($this, index);
    }
  });
  $(document).trigger('onshapesrendered');
};

Colors.circlify = function($element, index){
  var $this = $element,
      $wrapper = $("<div class='shape-wrapper'>"),
      width = $this.width(),
      height = $this.height(),
      is_small = $this.hasClass('small'),
      default_min_side = is_small ? 30 : 60,
      min_side = $this.data('min-side') || default_min_side;
      padding = is_small ? 15 : 30,
      side = Math.max(Math.max(width, height) + padding, min_side);

  $wrapper
    .css('width', side);

  $this
    .css('border-radius', '50%')
    .css('vertical-align', 'middle')
    .css('width', side)
    .css('height', side)
    .html($('<span>')
      .html($this.html())
    )
    .addClass('shaped')
    .wrap($wrapper);

};

Colors.hexagonify = function($element, index){
  // from http://csshexagon.com/

  if(window.isLTie9){
    return;
  }

  if(!window.sheet){
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    if (style.styleSheet) { // for IE
      style.styleSheet.cssText = "";
    } else { // others
      style.appendChild(document.createTextNode(""));
    }
    var h = document.getElementsByTagName('head')[0];
    h.appendChild(style);
    window.sheet = style.sheet;
  }

  var $this = $element,
      $wrapper = $("<div class='shape-wrapper'>"),
      is_small = $this.hasClass('small'),
      hexagonClass = "hexagon-" + index,
      root2 = 1.41421356237,
      root3 = 1.73205080757,
      scaleFactor = 0.577350269189626,
      width = $this.width(),
      height = $this.height();

  if(width > height){
    width = width + (is_small ? 15 : 30);
    height = width/root3;
  } else {
    width = height * root3;
  }

  var borderWidth = 3,
      borderColor = '#333',
      capWidth = width/root2,
      border = 'solid ' + borderWidth + 'px ' + borderColor,
      capBorder = 'solid ' + (borderWidth * root2) + 'px ' + borderColor,
      top = -width/root2/2,
      bottom = top,
      left = (width - capWidth)/2;

  if($this.hasClass('border')){
    left = left - borderWidth/2;
  }

  $this
    .addClass(hexagonClass)
    .html($('<span>')
      .html($this.html())
    );

  Colors.addCSSRule(
    window.sheet,
    '.' + hexagonClass,
    'width: ' + width + 'px;' +
    'height: ' + height + 'px;' +
    'margin-top: ' + height/2 + 'px;' +
    'margin-bottom: ' + height/2 + 'px;' +
    'border-left: ' + border + ';' +
    'border-right: ' + border + ';'
  );

  Colors.addCSSRule(
    window.sheet,
    '.' + hexagonClass + ':before',
    'width: ' + capWidth + 'px;' +
    'height: ' + capWidth + 'px;' +
    '-webkit-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
    '-ms-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
    'transform: scaleY(' + scaleFactor + ') rotate(-45deg);' + 
    'left: ' + left + 'px;' +
    'top: ' + top + 'px;' +
    'border-top: ' + capBorder + ';' +
    'border-right: ' + capBorder + ';'
  );

  Colors.addCSSRule(
    window.sheet, 
    '.' + hexagonClass + ':after', 
    'width: ' + capWidth + 'px;' +
    'height: ' + capWidth + 'px;' +
    '-webkit-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
    '-ms-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
    'transform: scaleY(' + scaleFactor + ') rotate(-45deg);' + 
    'left: ' + left + 'px;' +
    'bottom: ' + bottom + 'px;' +
    'border-bottom: ' + capBorder + ';' +
    'border-left: ' + capBorder + ';'
  );

  $this.wrap($wrapper);
  $this.addClass('shaped');
};

Colors.addCSSRule = function(sheet, selector, rules) {
  if("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", 0);
  }
  else if("addRule" in sheet) {
    sheet.addRule(selector, rules);
  }
};

Colors.initListeners = function(){

  var $document = $(document),
      $body = $('body');

  window.previousLists = [];

  $document
    .on('click', '[data-action=toggle-browse]', function(e){
      $document.trigger($body.hasClass('browsing') ? 'closing' : 'opening');
      $body.toggleClass('browsing');
      if($body.hasClass('browsing')){
        window.previousLists = [];
        $('.side-nav ul').hide();
        $('.side-nav .root').show();
      }
      e.preventDefault();
    })
    .on('click', '[data-action=toggle-cart]', function(e){
      if(!e.ctrlKey && !e.metaKey && ajaxCart){
        $document.trigger($body.hasClass('shopping') ? 'closing' : 'opening');
        $body.toggleClass('shopping');
        if($body.hasClass('shopping')){
          ajaxCart.load();
          Colors.onPriceAdded();
        }
        e.preventDefault();
      }
    })
    .on('click', '[data-action=toggle-search]', function(e){
      if(!e.ctrlKey && !e.metaKey){
        $body.toggleClass('searching');
        if($body.hasClass('searching')){
          $('.search-bar-wrapper input.text').focus();
        } else {
          $('.search-bar-wrapper input.text').blur();
        }
        e.preventDefault();
      }
    })
    .on('keydown', 'body', function(e){
      if($body.hasClass('searching') && e.which === 27){
        $('[data-action=toggle-search]').first().click();
      }
      if($body.hasClass('browsing') && e.which === 27){
        $('[data-action=toggle-browse]').first().click();
      }
      if($body.hasClass('shopping') && e.which === 27){
        $('[data-action=toggle-cart]').first().click();
      }
      if(e.which == 9){
        $('body')
          .removeClass('no-outlines')
          .one('mousedown', function(){
            $(this).addClass('no-outlines');
          });
      }
      if(e.which == 13){
        var $activeElement = $(document.activeElement);
        switch($activeElement.attr('data-action')){
          case 'toggle-cart':
            window.location = '/cart';
            e.preventDefault();
            break;
          case 'toggle-search':
            window.location = '/search';
            e.preventDefault();
            break;
          case 'show-product':
            window.location = $activeElement.attr('href');
            e.preventDefault();
        }
      }
    })
    .on('keyup', 'body', function(e){
      if(e.which == 9){
        var $activeElement = $(document.activeElement);
        if(!$body.hasClass('browsing') && $activeElement.parents('.side-nav').length > 0){
          $('[data-action=toggle-browse]').first().click();
        }
        if ($body.hasClass('browsing') && $activeElement.parents('.side-nav').length == 0){
          $('[data-action=toggle-browse]').first().click();
        }
      }
    })
    .on('ajaxCart.afterCartLoad', function(evt, cart) {
      var $adminBar = $('#admin_bar_iframe')
          $items = $('.side-cart .items'),
          $more = $('.side-cart .more'),
          moreHeight = $more.outerHeight(),
          adminBarHeight = $adminBar.height();

      $items.css('bottom', moreHeight);
      if($adminBar.length > 0){
        if($adminBar.css('width') != "40px"){
          $more.css('bottom', adminBarHeight);
          $items.css('bottom', moreHeight + adminBarHeight);
        }
      }
      $items.scrollTop(window.cartScrollTop);
      $document.trigger('opening');
      $body.addClass('shopping');
    })
    .on('click', 'body.browsing .main', function(e){
      $document.trigger('closing');
      $body.removeClass('browsing');
      e.preventDefault();
    })
    .on('click', 'body.shopping .main', function(e){
      $document.trigger('closing');
      $body.removeClass('shopping');
      e.preventDefault();
    })
    .on('opening', function(){
      Colors.fixFeaturedProduct();
      Colors.fixHeader();
    })
    .on('closing', function(){
      setTimeout(function(){
        Colors.freeFeaturedProduct();
        Colors.freeHeader();
      }, 600);
    })
    .on('change', '[data-action=update-cart]', function(){
      $('input.update-cart').click();
    })
    .on('click', '.side-nav a:not([data-action])', function(e){
      if(!e.ctrlKey && !e.metaKey){
        $document.trigger('closing');
        $body.removeClass('browsing');
      }
    })
    .on('focus', 'form .error', function(e){
      $(this).one('keydown', function(e){
        $(this).removeClass('error');
      });
    })
    .on('click', '[data-action=link-to-child-list][data-handle]', function(e){
      var handle = $(this).attr('data-handle'),
          $previousList = $(this).parents('ul'),
          $lists = $('.side-nav ul'),
          $list = $('.side-nav .' + handle);

      if($list.length > 0){
        window.previousLists.push($previousList);
        $lists.hide();
        $list.show().fadeTo(0,0).fadeTo(300, 1, "easeOutQuad");
        e.preventDefault();
      }
    })
    .on('click', '[data-action=back-to-previous-list]', function(e){
      var $previous = window.previousLists.pop() || $('.side-nav .root'),
          $lists = $('.side-nav ul');

      $lists.hide();
      $previous.show().fadeTo(0,0).fadeTo(300, 1, "easeOutQuad");
      e.preventDefault();
    })
    .on('click', '[data-action=add-new-address]', function(e){
      Shopify.CustomerAddress.toggleNewForm();
      e.preventDefault();
    })
    .on('click', '[data-action=hide-new-address]', function(e){
      Shopify.CustomerAddress.toggleNewForm();
      e.preventDefault();
    })
    .on('click', '[data-action=edit-address][data-address-id]', function(e){
      var address_id = $(this).data('address-id');
      Shopify.CustomerAddress.toggleForm(address_id);
      e.preventDefault();
    })
    .on('click', '[data-action=hide-edit-address][data-address-id]', function(e){
      var address_id = $(this).data('address-id');
      Shopify.CustomerAddress.toggleForm(address_id);
      e.preventDefault();
    })
    .on('change', '.template-cart .quantity input', function(e){
      var $this = $(this),
          $form = $('form.cart');

      clearTimeout(window.cartUpdateTimeout);
      window.cartUpdateTimeout = setTimeout(function(){
        $.ajax({
          type: 'POST',
          dataType: 'html',
          data: $form.serialize(),
          url: $form.attr('action'),
          success: function(data) {
            var $newForm = $(data).find('form.cart');
            if($('.items .item', $newForm).length > 0 && !window.is_ie){
              $form.replaceWith($newForm);
              Colors.initShapes();
              ajaxCart.init();
            } else {
              window.location = '/cart';
            }
          }
        });
        $this
          .prop('disabled', true)
          .fadeTo(0, 0.25);
      }, 1000);
    })
    .on('click', '[data-action=show-landing]', function(e){
      e.preventDefault();
      $('.landing').fadeIn();
      $('.login').hide();
    })
    .on('click', '[data-action=show-login]', function(e){
      e.preventDefault();
      $('.landing').hide();
      $('.login').fadeIn();
      if(!window.isTouchDevice){
        $('.login input.password').focus();
      }
    });

    if(window.showPasswordLogin){
      $('[data-action=show-login]').first().trigger('click');
    }
};

Colors.initHeader = function(){
  var $window = $(window),
      $header = $('.header'),
      $bar = $('.bar', $header).clone().addClass('fixed').appendTo($header),
      is_home_page = $('body').hasClass('template-index'),
      are_featured_products_on_top = $('.home .sections div').first().hasClass('featured-products'),
      to_solid_edge = are_featured_products_on_top ? $('.featured-products').offset().top + $('.featured-products').outerHeight() - $header.outerHeight() : false,
      not_interactive = $('body').hasClass('template-customers-login') || $('body').hasClass('template-customers-account') || $('body').hasClass('template-customers-addresses') || $('body').hasClass('template-customers-register') || $('body').hasClass('template-customers-login') || $('body').hasClass('template-404') || $('body').hasClass('template-cart') || $('body').hasClass('template-article'),
      interactive = !not_interactive;

  $('.bar.fixed .currency-picker', $header).remove();

  if(interactive && !window.isLTie9){
    enquire.register("screen and (min-width:620px)", {
      match : function() {
        $window.on('scroll.header touchmove.header', function(e){
          var scroll_top = $window.scrollTop();
          $header.toggleClass('scrolled', scroll_top > 0);
          if(is_home_page && are_featured_products_on_top){
            $header.toggleClass('scrolling', scroll_top > 30);
            $header.toggleClass('solid', scroll_top > to_solid_edge);
          } else {
            $header.toggleClass('solid', scroll_top > 50);
          }
        });
        $window.trigger('scroll.header');
      },      
      unmatch : function() {
        $window.off('scroll.header touchmove.header');
        $header.removeClass('scrolled scrolling solid');
      }
    });
  }
};

Colors.initHomePage = function(){
  if ($('body').hasClass('template-index')){
    

    // fix featured products full background layout
    
  }
};

Colors.initFeaturedProducts = function(){
  var $window = $(window),
      $products = $('.featured-products'),
      $product = $('.featured-product'),
      $lastProduct = $product.last(),
      $lastProductInfo = $('.info', $lastProduct)
      index_active_product = -1;

  $window.on('scroll.featuredProducts', function(e){
    if($products.hasClass('with-transition')){
      var scroll_top = $window.scrollTop(),
          window_height = $window.height(),
          offset_top = $('.header').height(),
          product_height = $product.last().outerHeight(true),
          products_height = $products.outerHeight(true),
          scroll_top_with_offset = Math.max(0, scroll_top + (product_height * 0.5) - offset_top),
          index_new_active_product = Math.floor(scroll_top_with_offset/product_height);

      if(index_active_product < $product.length - 1 || index_new_active_product == $product.length - 2){
        if(index_new_active_product != index_active_product){
          $product.removeClass('active')
            .eq(index_new_active_product).addClass('active')
              .find('.info').css('top', offset_top);

          index_active_product = index_new_active_product;
        }
      } else {
        if($lastProduct.offset().top - scroll_top - offset_top > 0){
          if($lastProductInfo.hasClass('absolute')){
            $lastProduct.removeClass('blocked');
            Colors.freeFeaturedProduct();
          }
        } else {
          if(!$lastProductInfo.hasClass('absolute')){
            Colors.fixFeaturedProduct();
            $lastProduct.addClass('blocked');
          }
        }
      }
    }
  });
};

Colors.startFeaturedProducts = function(){
  Colors.freeFeaturedProduct();
  $('.featured-products').addClass('with-transition');
  $(window).trigger('scroll.featuredProducts');
  if($('.featured-product.active').length == 0){
    $('.featured-product:last')
      .addClass('blocked active')
      .find('.info')
        .addClass('absolute');
  }
};

Colors.stopFeaturedProducts = function(){
  $('.featured-products').removeClass('with-transition');
};

Colors.fixFeaturedProduct = function(){
  var $active = $('.featured-product.active'),
      $info = $('.info', $active);

  if($active.hasClass('blocked')) return;

  if ($info.length){
    $info
      .css('top', $info.offset().top - $active.offset().top)
      .addClass('absolute');
  }
};

Colors.freeFeaturedProduct = function(){
  var $active = $('.featured-product.active'),
      $info = $('.info', $active);

  if($active.hasClass('blocked')) return;

  if($info.length){
    $info
      .css('top', $('.header').height())
      .removeClass('absolute');
  }
};

Colors.fixHeader = function(){
  var $bar = $('.header.scrolled .bar.fixed');
  if ($bar.length){
    $bar
      .css('top', $bar.offset().top)
      .css('position', 'absolute');
  }
};

Colors.freeHeader = function(){
  var $bar = $('.header.scrolled .bar.fixed');
    if ($bar.length){
      $bar
        .css('top', 0)
        .css('position', 'fixed');
    }
};

Colors.initProductPage = function(){
  var $body = $('body'),
      $window = $(window);

  if ($body.hasClass('template-product') && window.product){
    Colors.initProductVariants();
    Colors.initProductImageGallery();
    Colors.initProductImageZoom();
    Colors.initProductRelatedProducts();
  }
};

Colors.initProductVariants = function(){
  var selectorClass = 'productSelect';
  if($('#' + selectorClass).length > 0){
    new Shopify.OptionSelectors(selectorClass, {
      product: window.product,
      enableHistoryState: true,
      onVariantSelected: function(variant, selector) {
        Colors.onVariantSelected({
          money_format: window.product.money_format,
          variant: variant,
          selector: selector
        });
      }
    });
    // adds label when there is just one variant
    if(window.product.add_label){
      $('.selector-wrapper:eq(0)').prepend('<label>' + window.product.label + '</label>');
    }
  }
};

Colors.onVariantSelected = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      selector = options.selector;

  // Selectors
  var $addToCart = $('[data-action=add-to-cart]'),
      $productPrice = $('#productPrice'),
      $comparePrice = $('#comparePrice');

  if (variant) {

    // Update variant image, if one is set
    if (variant.featured_image) {
      var id = variant.featured_image.id,
          $image = $('#' + id),
          $images = $image.parent().find('img');

      if($image.length){
        $images.addClass('hide');
        $image.removeClass('hide');
      }
    }

    // Select a valid variant if available
    if (variant.available) {
      Colors.enableAddToCart();      
    } else {
      Colors.disableAddToCart();
    }

    $productPrice.html($('<span>').addClass('money').html(Shopify.formatMoney(variant.price, moneyFormat))).show();

    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice.html($('<span>').addClass('money').html(Shopify.formatMoney(variant.compare_at_price, moneyFormat))).show();
      $productPrice.addClass('on-sale');
    } else {
      $comparePrice.hide();
      $productPrice.removeClass('on-sale');
    }

    Colors.onPriceAdded();

  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    // To only show available variants, implement linked product options:
    //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
    Colors.disableAddToCart();
  }
};

Colors.enableAddToCart = function(){
  var $addToCart = $('[data-action=add-to-cart]');
  if($addToCart.prop('disabled') === true){
    $addToCart
      .removeClass()
      .addClass('btn accent shape circle')
      .prop('disabled', false)
      .html("Add to\u003cbr\u003ecart");
    Colors.initShapes();
  }
};

Colors.disableAddToCart = function(){
  var $addToCart = $('[data-action=add-to-cart]');
  if($addToCart.prop('disabled') === false){
    if($addToCart.parent('.shape-wrapper').length > 0){
      $addToCart.unwrap();
    }
    $addToCart
      .removeClass()
      .removeAttr('style')
      .addClass('btn border disabled')
      .prop('disabled', true)
      .html("Unavailable");
  }
};

Colors.showVariantImage = function (src, imgObject, el) {
  $('.frame img').attr('src', src);
};

Colors.initProductImageGallery = function(){
  var $document = $(document);

  $document
    .on('click', '[data-action=show-product-image][data-id]', function(e){
      e.preventDefault();
      $('.frame img').addClass('hide');
      $('#' + $(this).data('id')).removeClass('hide');
    });
};

Colors.initProductImageZoom = function(){
  
    $('.product-images').each(function(){
      var $product = $(this);
      $('[data-mfp-src]', $product).magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        closeBtnInside: false,
        closeOnContentClick: true,
        tClose: 'Close (Esc)',
        removalDelay: 500,
        closeMarkup: '<button title="%title%" class="mfp-close"><i class="fc fc-close"></i></button>',
        gallery: {
          enabled:true,
          navigateByImgClick: false,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
          tPrev: 'Previous (Left arrow key)',
          tNext: 'Next (Right arrow key)'
        }
      });
    });
  
};

Colors.initProductRelatedProducts = function(){
  if($('.content.related').length){
    $('.collection-product').pick(4).each(function(index){
      $(this)
        .removeClass(function(index, className){
          return className.match(/col-\d/g)[0];
        })
        .addClass('col-' + index);
    });
  }
};

Colors.initLoginPage = function(){

  $(document)
    .on('click', '[data-action=toggle-recover-password]', function(){
      $('#recover_password').toggle();
      $('#login, #register, #guest').toggle();

      if($('#recover_password').is(':visible')){
        if(!$('#recover_password .btn').hasClass('round')){
          $('#recover_password .btn').addClass('round');
          Colors.initShapes();
        }
        $('#recover_password input#recover-email').focus();
      } else {
        if(!$('#login .btn, #register .btn, #guest .btn').hasClass('round')){
          $('#login .btn, #register .btn, #guest .btn').addClass('round');
          Colors.initShapes();
        }
        $('#login input#customer_email').focus();
      }
    });

  // direct access to recover page: account/login#recover
  if (window.location.hash == '#recover'){ 
    $('#login .round, #register .round, #guest .round').removeClass('round');
    $('[data-action=toggle-recover-password]').first().click();
  }
};

Colors.initAddressesPage = function(){
  var $body = $('body');

  if ($body.hasClass('template-customers-addresses') && window.customer_addresses){
    // Initialize observers on address selectors
    new Shopify.CountryProvinceSelector('address_country_new', 'address_province_new', {
      hideElement: 'address_province_container_new'
    });

    // Setup province selector on each customer address
    for(var i in window.customer_addresses){
      var id = window.customer_addresses[i];
      new Shopify.CountryProvinceSelector('address_country_' + id, 'address_province_' + id, {
        hideElement: 'address_province_container_' + id
      });
    }

    // Contents of customer_area.js (global asset)
    Shopify.CustomerAddress = {
      toggleForm: function(id) {
        var $form = $('#edit_address_' + id),
            $button = $('#view_address_' + id);
        
        $form.toggle();
        $button.toggle();

        if ($form.is(':visible')){
          $('input:not([type=hidden])', $form).first().focus()
          $('body,html').animate({ scrollTop: $form.offset().top}, { duration: 600 });
        }

        return false;
      },

      toggleNewForm: function() {
        var $form = $('#add_address'),
            $button = $('#add_new_address_button');

        $form.toggle();
        $button.toggle();

        if ($form.is(':visible')){
          $('input:not([type=hidden])', $form).first().focus()
          $('body,html').animate({ scrollTop: $form.offset().top}, { duration: 600 });
        }
        return false;
      },

      destroy: function(id, confirm_msg) {
        if (confirm(confirm_msg || "Are you sure you wish to delete this address?")) {
          Shopify.postLink('/account/addresses/'+id, {'parameters': {'_method': 'delete'}});
        }
      }
    }
  }
};

Colors.initCollections = function(){
  if($('.collections-items').length){
    if(window.isTouchDevice){
      $('.collections-items').removeClass('interactive');
    }
  }
};

Colors.initCollection = function(){
  Colors.initCollectionNavigation();
  Colors.initCollectionInteractions();
};

Colors.initCollectionNavigation = function(){
  var $categories = $('.collection .categories');
  if($categories.length == 1){
    var loadNextTag = function(){
      var $tags = $('a:not(.loaded)', $categories);

      if ($tags.length > 0){
        var $tag = $tags.first(),
            url = $tag.attr('href');

        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: url,
          success: function(data) {
            var $data = $(data),
                $collection_products = $data.find('.collection-products'),
                title = $data.filter('title').text()
                count = 0;

            if($collection_products.length){
              count = $collection_products.data('count');
              $('sup', $tag).text(count);
            }

            if(count == 0){
              $tag.parent('li').remove();
            } else {
              if(window.isTouchDevice || window.isLTie9){
                $collection_products.removeClass('interactive');
              }

              $tag
                .addClass('loaded')
                .on('click', function(e){
                  if(!e.ctrlKey && !e.metaKey){
                    $('.collection-products').replaceWith($collection_products)
                    $('a', $categories).removeClass('active');
                    $tag.addClass('active');
                    document.title = title;
                    Colors.initShapes();
                    Colors.onPriceAdded();
                    $('.collection-products').fadeTo(0,0).fadeTo(300, 1);
                    if (e.originalEvent) {
                      window.history.pushState({url: url}, title, url);
                    }
                    e.preventDefault();
                  }
                });
            }

            loadNextTag();
          }
        });
      }
    };

    loadNextTag();
  }

  $(document).on('click', '.collection-products .pagination a', function(e){
    var url = $(this).attr('href');
    if(!e.ctrlKey && !e.metaKey && !$('.featured-collection').length){
      $.ajax({
        type: 'GET',
        dataType: 'html',
        url: url,
        success: function(data) {
          var $data = $(data),
              $collection_products = $data.find('.collection-products'),
              title = $data.filter('title').text()
              count = 0;

          $('.collection-products').replaceWith($collection_products)
          document.title = title;
          Colors.initShapes();
          Colors.onPriceAdded();
          $('.collection-products').fadeTo(0,0).fadeTo(300, 1);
          $('body,html').animate({ scrollTop: 0}, { duration: 0 });
          if (e.originalEvent) {
            window.history.pushState({url: url}, title, url);
          }
        }
      });
      e.preventDefault();
    } else if($('.featured-collection').length) {
      if(url.indexOf('/?page=') === 0){
        $(this).attr('href', '/collections/all' + url);
      }
    }
  });

  // window.onpopstate = function(e){
  //   var url = e.state ?
  //             e.state.url :
  //             $('.categories a').length ?
  //               $('.categories a').first().attr('href') :
  //               $('.pagination a').first().attr('href'),
  //       $tag = $('.categories a[href="' + url + '"]'),
  //       $page = $('.pagination a[href="' + url + '"]');

  //   if($tag.length){
  //     $tag.trigger('click');
  //   } else if($page.length){
  //     $page.first().trigger('click');
  //   } else {
  //     window.location = url;
  //   }
  // };

};

Colors.initCollectionInteractions = function(){
  var $collection = $('.collection-products');
  if($collection.length == 1){
    if(window.isTouchDevice || window.isLTie9 ){
      $collection.removeClass('interactive');
    }
    if($('.template-product:not(.dummie)').length == 0 && !window.isLTie9){
      if(true){
        enquire.register("screen and (min-width:620px)", {
          match : function() {
            Colors.initCollectionProductPreview();
          },      
          unmatch : function() {
            Colors.stopCollectionProductPreview();
            Colors.closeProductPreviews();
          }
        });
      }
    }
  }
};

Colors.initCollectionProductPreview = function(){
  if($('.template-search').length) return;
  $(document)
    .on('click.productPreview', '.collection-product[href]', function(e){
      if(!e.ctrlKey && !e.metaKey){
        var $this = $(this),
            $current = $this,
            $insertAfterProduct = false;

        if($this.hasClass('opened')){
          e.preventDefault();
          return;
        } 

        $this.addClass('opened');

        // find next product before 
        // a clear: left product.
        do{
          var $next = $current.next();
          if($next.length){
            if($next.css('clear') == 'left'){
              $insertAfterProduct = $current;
            } else {
              $current = $next;
            }
          } else {
            $insertAfterProduct = $current;
          }
        } while(!$insertAfterProduct);

        // Load preview
        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: $this.attr('href'),
          success: function(data) {
            var $preview = $(data).find('.content.product'),
                $page = $('body,html');

            // close previous previews
            $('.collection-product.opened').removeClass('opened');
            $('.preview').remove();

            // insert element
            $preview
              .addClass('preview')
              .insertAfter($insertAfterProduct)
              .data('thumbnail', $this);

            // init product page
            Colors.initShapes();
            Colors.initProductVariants();
            Colors.initProductImageGallery();
            Colors.initProductImageZoom();
            Colors.onPriceAdded();

            // remember previous scroll position
            window.previousScrollTop = $(window).scrollTop();

            // animate in
            $page
              .one('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
                $page.stop();
              })
              .delay(250)
              .animate({
                scrollTop: Math.round($preview.offset().top - $('.header').outerHeight() - 30)
              }, {
                duration: 1200,
                delay: 2000,
                easing: "easeOutQuad",
                done: function(){
                  $page.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
                }
              });
          }
        });
        e.preventDefault();
      }
    })
    .on('click', '[data-action=close-preview]', function(e){
      var $preview = $(this).parents('.preview'),
          removeProduct = function(){
            $preview.slideUp({
              duration: 600,
              easing: "easeInOutQuad",
              complete: function(){
                var $this = $(this),
                    $thumbnail = $this.data('thumbnail');
                $this.remove();
                $thumbnail.removeClass('opened');
              }
            });
          };

      if(window.previousScrollTop && $('.preview').length == 1){
        $('body,html').animate({
          scrollTop: window.previousScrollTop
        }, {
          duration: 600,
          easing: "easeInOutQuad",
          complete: function(){
            removeProduct();
          }
        });
      } else{
        removeProduct();
      }
      window.previousScrollTop = false;
      e.preventDefault();
    });
};

Colors.initFooter = function(){
  var $contactText = $('.footer .contact p');
  if($contactText.length){
    var regEx = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)(?![^<]*>|[^<>]*<\/)/g;
    $contactText.html($contactText.html().replace(regEx, "<a href=\"mailto:$1\">$1</a>"));
  }
};

Colors.closeProductPreviews = function(){
  $('.product.preview').remove();
};

Colors.stopCollectionProductPreview = function(){
  $(document)
    .off('click.productPreview');
};

Colors.initEasings = function(){
  var baseEasings = {};

  $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
    baseEasings[ name ] = function( p ) {
      return Math.pow( p, i + 2 );
    };
  });

  $.extend( baseEasings, {
    Sine: function( p ) {
      return 1 - Math.cos( p * Math.PI / 2 );
    },
    Circ: function( p ) {
      return 1 - Math.sqrt( 1 - p * p );
    },
    Elastic: function( p ) {
      return p === 0 || p === 1 ? p :
        -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
    },
    Back: function( p ) {
      return p * p * ( 3 * p - 2 );
    },
    Bounce: function( p ) {
      var pow2,
        bounce = 4;

      while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
      return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
    }
  });

  $.each( baseEasings, function( name, easeIn ) {
    $.easing[ "easeIn" + name ] = easeIn;
    $.easing[ "easeOut" + name ] = function( p ) {
      return 1 - easeIn( 1 - p );
    };
    $.easing[ "easeInOut" + name ] = function( p ) {
      return p < 0.5 ?
        easeIn( p * 2 ) / 2 :
        1 - easeIn( p * -2 + 2 ) / 2;
    };
  });
};

Colors.initPlaceholders = function(){
  $('input, textarea').placeholder();
};

Colors.onPriceAdded = function(){
  if(Currency){
    Currency.convertAll(shopCurrency, $('[name=currencies]').val());
    onCurrencySet();
  }
}