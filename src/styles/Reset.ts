import {css} from '@emotion/react';

const Reset = () => css`

	* {
		box-sizing: border-box;
	}

	html,
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	img,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	article,
	footer,
	header,
	nav,
	section {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}

	body{
		line-height: 1;
	}

	article,
	footer,
	header,
	nav,
	section,
	aside,
	figcaption {
		display: block;
	}

	ol,
	ul {
		list-style: none;
	}

	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		color: inherit;
		text-decoration: none;
	}

	input {
		-webkit-tap-highlight-color: transparent;
	}

	button {
		padding: 0;
		border: none;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
`;


export default Reset;