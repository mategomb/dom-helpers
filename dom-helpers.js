// helper functions to make dom manipulation a bit less tedious
// import them into your js files with the following:
// import { $, html, insertFromTemplate, insertText } from "./helpers.js";

function $(selector) {
	const selection = document.querySelectorAll(selector);
	if (selection.length === 1) {
		return selection[0];
	} else if (selection.length > 1) {
		return selection;
	}
}

function insertFromTemplate(templateSelector, locationSelector) {
	const templateSelection = $(templateSelector);

	function cloneTemplate(template, location) {
		const clone = template.content.cloneNode(true);
		location.appendChild(clone);
	}

	const locationSelection = $(locationSelector);

	if (locationSelection.length === 1) {
		cloneTemplate(templateSelection, locationSelection);
	} else if (locationSelection.length > 1) {
		for (const location of locationSelection) {
			cloneTemplate(templateSelection, location);
		}
	}
}

function insertText(text, selector) {
	const selection = $(selector);
	if (selection.length === 1) {
		selection.textContent = text;
	} else if (selection.length > 1) {
		for (const element of selection) {
			element.textContent = text;
		}
	}
}

export { $, html, insertFromTemplate, insertText };

// for html support in template literals with the lit-html visual studio code extension

const html = (markup) => markup;
