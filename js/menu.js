const btnBM = document.querySelector('.menu-burger');
const	navLink = document.querySelector('.nav-link');
//Выподающие меню
btnBM.addEventListener('click', ()=> {
	navLink.classList.toggle('show');
})
//Защита изменения экрана
window.addEventListener('resize', ()=> {
	const widthw = document.body.clientWidth;
	if(widthw > 600) {
		if(navLink.classList.contains) {
			navLink.classList.remove("show");
		}
	}
})
