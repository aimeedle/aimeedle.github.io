/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

new Chart(document.getElementById("line-chart"), {
	type: 'line',
	data: {
	  labels: ["January", "February", "March"],
	  datasets: [{ 
		  data: [6953, 7557, 4122],
		  label: "Family 2020",
		  borderColor: "#3e95cd",
		  fill: false
		}, { 
		  data: [6649, 6932, 9070],
		  label: "Family 2019",
		  borderColor: "#8e5ea2",
		  fill: false
		}, { 
		  data: [2532, 2797, 1588],
		  label: "Womens 2020",
		  borderColor: "#3cba9f",
		  fill: false
		}, { 
		  data: [2511, 2680, 3585],
		  label: "Womens 2019",
		  borderColor: "#FFA500",
		  fill: false
		}, { 
		  data: [550, 527, 266],
		  label: "Mens 2020",
		  borderColor: "rgb(255, 99, 132)",
		  fill: false
		}, 
		{ 
		  data: [585, 514, 642],
		  label: "Mens 2019",
		  borderColor: "rgb(255, 255, 0)",
		  fill: false
		}
	  ]
	},
	options: {
	  title: {
		display: true,
		text: 'Clothing sales by category in Q1 2019 and Q1 2020',
		fontColor: "#ffffff"
	  }, scales: {
        yAxes: [{ 
			scaleLabel: {
				display: true,
				labelString: "Non-seasonally adjusted sales in millions USD",
				fontColor: "#ffffff"
			},
			ticks: {
				fontColor: 'white'
			},
			gridLines: {
				display: false,
				color: "#ffffff"
			},
		}],
		xAxes: [{
			ticks: {
				fontColor: 'white'
			  },
			gridLines: {
				display: false,
				color: "#ffffff"
			},
		}]
	  },
	  legend: {
		labels: {
		  fontColor: 'white'
		}
	  }
	}
  });

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);