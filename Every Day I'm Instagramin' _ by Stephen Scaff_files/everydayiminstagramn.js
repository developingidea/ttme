(function($) {
	$.everydayImInstagrammin = {
		defaults: {
			clientID: 'null',
			accessToken: 'null',
			numberPics: '12',
			imgClass: 'everyday-img',
			sequenceFadeIn: 'true',
			sequenceDuration: '220',
			captions: 'false',
			captionAlign: 'bottom',
			InstaType: 'instaUser'
		}
	};
	$.fn.extend({
		everydayImInstagrammin: function(options) {
			$.extend($.everydayImInstagrammin.defaults, options);
			return this.each(function() {
				var elem = $(this);
				var clientID = options.clientID;
				var accessToken = options.accessToken;
				var numberPics = options.numberPics;
				var imgClass = options.imgClass;
				var sequenceFadeIn = options.sequenceFadeIn;
				var sequenceDuration = options.sequenceDuration;
				var captionAlign = options.captionAlign;
				var hashtag = options.hashTag; // #hashtag
				var instaUrl = 'https://api.instagram.com/v1/users/' + clientID + '/media/recent/?access_token=' + accessToken + '&callback=?';
				if (options.InstaType == 'byHash') {
					instaUrl = 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent/?access_token=' + accessToken + '&callback=?';
				}
				$.ajax({
					type: "GET",
					dataType: "jsonp",
					cache: false,
					url: instaUrl,
					success: function(data) {
						for (var i = 0; i < options.numberPics; i++) {
							if (data.data[i].hasOwnProperty('caption')) {
								var caption = '';
								if (data.data[i].caption !== null) {
									caption = data.data[i].caption.text;
								}
								elem.append("<li class='everyday-item'><a target='_blank' href='" + data.data[i].link + "'><img class='" + options.imgClass + "' src='" + data.data[i].images.standard_resolution.url + "' /><div class='everyday-caption'><p>" + caption + "</p></div></a></li>");
							} else {
								elem.append("<li class='everyday-item'><a target='_blank' href='" + data.data[i].link + "'><img class='" + options.imgClass + "' src='" + data.data[i].images.standard_resolution.url + "'  /></a></li>");
							}
						}
						if (options.captionAlign == 'bottom') {
							$('.everyday-caption p').css({
								position: 'absolute',
								bottom: '10px'
							});
						}
						if (options.captionAlign == 'top') {
							$('.everyday-caption p').css({
								position: 'absolute',
								top: '10px'
							});
						}
						if (options.sequenceFadeIn == 'true') {
							eT = 0;
							$('.' + imgClass).hide().each(function() {
								$(this).delay(eT).fadeIn(300);
								eT += sequenceDuration;
							});
						}
						//captions
						$("li.everyday-item a").on({
							mouseenter: function() {
								$(".everyday-caption", this).filter(':not(:animated)').fadeIn(400);
							},
							mouseleave: function() {
								$(".everyday-caption", this).fadeOut(400);
							}
						});
					}
				});
			});
		}
	});
})(jQuery);
$('.instagram').everydayImInstagrammin({
	clientID: '300619084',
	accessToken: '300619084.5b9e1e6.230b0dbc78ad48ad87cca3a1b91b8ec2',
	numberPics: '12',
	imgClass: 'insta-img',
	captions: 'true',
	captionAlign: 'bottom',
	sequenceFadeIn: 'true',
	sequenceDuration: 300
});
$('.instagram-liggie').everydayImInstagrammin({
	clientID: '472977947',
	accessToken: '300619084.817864a.ccc422467e254e0a81d79e58e13b9410',
	numberPics: '10',
	imgClass: 'insta-img',
	captions: 'true'
});