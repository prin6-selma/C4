class Author {
  constructor(id, name, midNames, surname, DoB, title) {
    this.id = id;
    this.name = name;
    this.midNames = midNames;
    this.surname = surname;
    this.dateOfBirth = DoB;
    this.title = title;
  }
}

const authors = [
    new Author(1, 'John', 'William', 'Doe', '1990-01-01', 'Mr.'),
    new Author(2, 'Jane', 'Elizabeth', 'Smith', '1985-06-15', 'Ms.'),
    new Author(3, 'Robert', 'James', 'Johnson', '1970-03-22', 'Dr.'),
    new Author(4, 'Emily', 'Patricia', 'Williams', '1995-11-12', 'Ms.'),
    new Author(5, 'Michael', 'Richard', 'Brown', '1960-08-20', 'Mr.'),
    new Author(8, 'Carla', 'Selma', 'Bota', '1988-03-10', 'Me')
];

const articleList = document.getElementById('articleList');
const folderPath = 'Articles';


fetch(folderPath)
  .then(response => response.text())
  .then(data => {
    data.forEach(file => {
      console.log(file);
      
    });
    
        
        return file

        const article = document.createElement('article');
        article.innerHTML = `
          <h3>${file.replace('.md', '')}</h3>
          <p>${getMarkdownSummary(folderPath + file)}</p>
          <a href="${folderPath + file}" class="read-more">Read More</a>
        `;
        articleList.appendChild(article);
      
 
});

function getMarkdownSummary(filePath) {
  // You can use a library like marked.js to parse Markdown files
  // For simplicity, we'll just return the first line of the file
  return fetch(filePath)
    .then(response => response.text())
    .then(text => text.split('\n')[0]);
}





















const fs = require('fs');
const path = require('path');

const folderPath = 'Articles';

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        // file = Articale_Name|00-00-0000|1.md
        const articleListEL = document.getElementById('articleList');
        const articleBlockEL = document.createElement('li');
        const articaleHeadingEL = document.createElement('h1');


        const fileName = file.replace('.md', '');
        const fileParts = file.split('=');
        const articaleHeading = fileParts[0].replace('_',' ');
        const publishDate = new Date(fileParts[1]);
        console.log(publishDate);

        articleBlock.classList.add('');
        articleBlock.id = `ab-${file}`;
        
    });
});
