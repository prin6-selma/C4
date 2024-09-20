import {convertToMd} from './convert-to-md.js';

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
const title = urlParams.get('title');
const date = urlParams.get('date');
const author = urlParams.get('author');

const articleTitleEl = document.getElementById('articleTitle');
articleTitleEl.textContent = title

// Disply the .md file as html in the content element
convertToMd(`Articles/${id}.md`, `content`);
