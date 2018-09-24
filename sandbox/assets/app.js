var videoTrackingFlag = true;
var i = 0;
function videoTracking() {		
	if (document.getElementById('homepageVideoCarousel') != null && videoTrackingFlag) {		
		var videoIframes = {};
		var thumbnailElements = document.querySelectorAll('#homepageVideoCarousel .thumbnailImage');

		console.info('.................................thumbnailElements.......................');
		console.info(thumbnailElements);

		for (var i = 0; i < thumbnailElements.length; i++) {
			var currentPlayerID = thumbnailElements[i].parentElement.children[1].children[0].getAttribute('id');
			videoIframes[currentPlayerID] = new YT.Player(currentPlayerID, {
				events: {
					'onStateChange': onPlayerStateChange
				}
			});

			console.info(videoIframes);

			thumbnailElements[i].addEventListener('click', function (event) {
				console.info(event);
				console.info(event.target.parentElement);
				event.target.parentElement.style.display = "none";
				event.target.parentElement.parentElement.children[1].style.display = "block";
				var currentPlayerID = event.target.parentElement.children[2].innerHTML;

				// var videoIframekeys = Object.keys(videoIframes)
				// console.info(videoIframekeys);
				// for (var j = 0; j < videoIframekeys.length; j++) {
				// 	videoIframes[videoIframekeys[j]].pauseVideo();
				// }

				videoIframes[currentPlayerID].playVideo();
			});
		}

		videoTrackingFlag = false;
	}
	else {
		setTimeout(videoTracking, 500);
		
	}
}

videoTracking();
