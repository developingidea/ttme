(function($){var body=$('body'),_window=$(window),nav,button,menu;nav=$('#site-navigation');button=nav.find('.menu-toggle');menu=nav.find('.nav-menu');$(function(){if(body.is('.sidebar')){var sidebar=$('#secondary .widget-area'),secondary=(0===sidebar.length)?-40:sidebar.height(),margin=$('#tertiary .widget-area').height()-$('#content').height()-secondary;if(margin>0&&_window.innerWidth()>999){$('#colophon').css('margin-top',margin+'px');}}});(function(){if(!nav||!button){return;}if(!menu||!menu.children().length){button.hide();return;}button.on('click.twentythirteen',function(){nav.toggleClass('toggled-on');if(nav.hasClass('toggled-on')){$(this).attr('aria-expanded','true');menu.attr('aria-expanded','true');}else{$(this).attr('aria-expanded','false');menu.attr('aria-expanded','false');}});if('ontouchstart'in window){menu.find('.menu-item-has-children > a, .page_item_has_children > a').on('touchstart.twentythirteen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}menu.find('a').on('focus.twentythirteen blur.twentythirteen',function(){$(this).parents('.menu-item, .page_item').toggleClass('focus');});})();function onResizeARIA(){if(643>_window.width()){button.attr('aria-expanded','false');menu.attr('aria-expanded','false');button.attr('aria-controls','primary-menu');}else{button.removeAttr('aria-expanded');menu.removeAttr('aria-expanded');button.removeAttr('aria-controls');}}_window.on('load.twentythirteen',onResizeARIA).on('resize.twentythirteen',function(){onResizeARIA();});_window.on('hashchange.twentythirteen',function(){var element=document.getElementById(location.hash.substring(1));if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)){element.tabIndex=-1;}element.focus();}});if($.isFunction($.fn.masonry)){var columnWidth=body.is('.sidebar')?228:245;$('#secondary .widget-area').masonry({itemSelector:'.widget',columnWidth:columnWidth,gutterWidth:20,isRTL:body.is('.rtl')});}})(jQuery);