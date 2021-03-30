const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider JavaScript
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators : false,
	interval : 3000,
	transistion : 600
});

// Parallax Client
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Portfolio Materialboxed
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// smooth Scroll
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy,{
	scrollOffset : 50
});