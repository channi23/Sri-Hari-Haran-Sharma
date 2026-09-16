const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const year = document.querySelector('#year');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
	root.dataset.theme = 'dark';
	toggle.setAttribute('aria-pressed', 'true');
}

toggle.addEventListener('click', () => {
	const dark = root.dataset.theme !== 'dark';
	root.dataset.theme = dark ? 'dark' : 'light';
	toggle.setAttribute('aria-pressed', String(dark));
	localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
});

year.textContent = new Date().getFullYear();
