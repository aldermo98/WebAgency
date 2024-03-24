/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
		setTimeout(()=>{
			$('#banner .more.scrolly').removeClass('initial-load');
		}, 4000)
		

	// Contact Form.
		$('#contactForm')
			.append('<a href="#contactForm" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				target: $body,
				visibleClass: 'is-contactForm-visible'
			});

		$('#form_contact').submit(function(event) {
			event.preventDefault(); // Prevent default form submission
			// Your form handling logic here
			submitForm(event)
		});
		var contactLinks = document.querySelectorAll('a[href="#contactForm"]');

	// Iterate through each anchor element and add event listener
		contactLinks.forEach(function(link) {
			link.addEventListener('click', function(event) {
				window.scrollTo({
					top: document.getElementById('contactForm').getBoundingClientRect().top + window.y,
					behavior: 'smooth'
				});
			});
		});

})(jQuery);

function submitForm(e){
	Email.send({
		SecureToken : "8dbf79ba-a662-470d-97ee-0a10f0eaddef",
		To : document.getElementById('form_contact-email').value,
		From : "skinymoreno98@gmail.com",
		// FromName: "support@varwebsolutions.com",
		Subject : "Email Confirmation Notice",
		Body : `
			Hi ${document.getElementById('form_contact-name').value},</br>
			</br>
			Thank you for reaching out to our team at Varweb Solutions! This is just an email confirming we 
			have received your message and will get back to you in 1-3 days. We appreciate your patience and look
			forward to working with you.</br>
			</br>
			Best,</br>
			Alder Moreno</br>
			Developer @ Varweb Solutions</br>
			(916) 390-1005</br>
			</br>
			</br>
			<hr>
			</br>
			${document.getElementById('form_contact-body').value}
			`
	}).then((message) => {
		console.log(message);
	});
	Email.send({
		SecureToken : "8dbf79ba-a662-470d-97ee-0a10f0eaddef",
		To : 'skinymoreno98@gmail.com',
		From : "skinymoreno98@gmail.com",
		// FromName: document.getElementById('form_contact-email').value,
		Subject : document.getElementById('form_contact-subject').value,
		Body : `
			${document.getElementById('form_contact-body').value}</br>
			</br>
			Email from </br>
			${document.getElementById('form_contact-name').value}</br>
		`
	}).then((message) => {
		if(message == 'OK'){
			document.getElementById('submit-feedback').innerHTML = 'Your message has been received!';
			document.getElementById('submit-feedback').className = 'success'
		}else{
			document.getElementById('submit-feedback').innerHTML = 'Error sending message... <a href="mailto:morenoalder98@gmail.com">Email Us</a> instead.';
			document.getElementById('submit-feedback').className = 'error'
		}
	});
}

function resetForm(){
	document.getElementById('submit-feedback').innerHTML = '';
	document.getElementById('submit-feedback').className = ''
}