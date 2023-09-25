
window.addEventListener("load", function() {
	const preloader = document.querySelector(".preloader");
	preloader.classList.add('animatePsOpas');
	setTimeout(() => {
		preloader.style.display = 'none';
	}, 1350);
});


particlesJS.load('particles-js', './config.json', function() {
  console.log('callback - particles.js config loaded');
});

