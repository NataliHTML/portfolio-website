let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
	themeToggler.classList.toggle('fa-sun');
	if (themeToggler.classList.contains('fa-sun')) {
		document.body.classList.add('active');
	} else {
		document.body.classList.remove('active');
	}
}

$('[data-modal]').on('click', function (event) {
	event.preventDefault();
	$('#modal-resume').addClass('modal-show');
});
$('#modal-resume').on('click', function () {
	$('#modal-resume').removeClass('modal-show');
});