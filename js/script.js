var burger = document.querySelector(".nav__burger");
console.log(`burger`, burger);
var menu = document.querySelector(".nav__menu");

burger.addEventListener("click", () => {
	if (menu && menu.classList.contains("is-open")) {
		return menu.classList.remove("is-open");
	}

	menu.classList.toggle("is-open");
});
