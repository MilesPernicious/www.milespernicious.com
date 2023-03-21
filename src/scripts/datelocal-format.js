/*
 * (C) Copyright 2023 Miles Pernicious
 *
 * SPDX-License-Identifier: MIT
 */

function datelocalFormat() {
	const elements = document.querySelectorAll("time[datetime],text[data-datelocal-options]");
	for (const elem of elements) {
		let date;
		if (elem instanceof HTMLTimeElement) {
			date = new Date(elem.dateTime);
		}
		else {
			date = new Date(elem.dataset.datetime);
		}

		const options = JSON.parse(elem.dataset.datelocalOptions);

		elem.textContent = new Intl.DateTimeFormat('en-US', options).format(date);
	}

	const zoneTexts = document.querySelectorAll("[data-datelocal-timezone-text]");
	if (zoneTexts.length === 0) {
		return;
	}

	const tz = new Intl.DateTimeFormat('en-US').resolvedOptions().timeZone;
	for (const text of zoneTexts) {
		text.textContent = tz;
	}
}

document.addEventListener("DOMContentLoaded", datelocalFormat);
