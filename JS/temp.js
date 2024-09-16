// import { convertToMd } from "./convert-to-md";

const fs = require('fs');
const path = require('path');

const folderPath = 'Articles'; // replace with your folder path

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        const articleList
        const articleBlock = document.createElement('div');
        articleBlock.classList.add('');
        articleBlock.id = `ab-${file}`;
    });
});
