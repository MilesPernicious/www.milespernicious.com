/*
 * (C) Copyright 2023 Miles Pernicious
 *
 * SPDX-License-Identifier: MIT
 */

const mhc = document.getElementById("masthead-container");
const btn = mhc.querySelector("button");

function showMobileNavbar() {
	mhc.classList.add("show");
	btn.setAttribute("aria-expanded", "true");
}

function hideMobileNavbar() {
	mhc.classList.remove("show");
	btn.setAttribute("aria-expanded", "false");
}

function clickEventHandler(event) {
	if (mhc.classList.contains("show")) {
		return hideMobileNavbar();
	}

	return showMobileNavbar();
}

function keydownEventHandler(event) {
	switch (event.key) {
		case "Esc":
		case "Escape":
			return hideMobileNavbar();
		default:
			return;
	}
}

btn.addEventListener("click", clickEventHandler);
btn.addEventListener("keydown", keydownEventHandler);

const nav = mhc.querySelector("nav");
const links = mhc.querySelector("ul");

links.addEventListener("click", (clickEvent) => {
	clickEvent.stopPropagation();
});

nav.addEventListener("click", hideMobileNavbar);
