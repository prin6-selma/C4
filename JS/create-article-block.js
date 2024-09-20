

// Functions ============
function createArticleBlock(id, name, publishDate, authors, summary) {
    const articleList = document.getElementById('articleList');

    const listItem = document.createElement('li');
    const heading = document.createElement('h1');
    const subheadingElement = document.createElement('div');
    const dateElement = document.createElement('span');
    const authorElement = document.createElement('span');
    const summaryElement = document.createElement('p');
    const readMoreElement = document.createElement(`button`);

    // class assignment
    subheadingElement.classList.add('subHeading');
    dateElement.classList.add('date');
    authorElement.classList.add('author');
    summaryElement.classList.add('summary');

    // Content
    listItem.dataset.article = `Articles/${id}.md`;
    heading.textContent =  `${name}`;
    getAuthorName(authors[0]).then(authorName => {
        authorElement.textContent = authorName;
    });
    dateElement.textContent = `${publishDate}`;
    summaryElement.textContent = `${summary}`;
    readMoreElement.textContent = 'Read More';

    // Events
    readMoreElement.addEventListener('click', () => {
        let newPage = window.open(`article.html?id=${id}&title=${name}&date=${publishDate}&author=${authorElement.textContent}`, '_blank');
      });

    // building append child
    listItem.appendChild(heading);
    subheadingElement.appendChild(dateElement);
    subheadingElement.appendChild(authorElement);
    listItem.appendChild(subheadingElement);
    listItem.appendChild(summaryElement);
    listItem.appendChild(readMoreElement)

    articleList.appendChild(listItem)
}
function getAuthorName(id) {
    return fetch('Articles/authors.json')
        .then(response => response.json())
        .then(authors => {
            let authorName = 'unknown';
            if (authors != null) {
                authors.forEach(author => {
                    if (author.id == id) {
                        authorName = author.firstName;
                    }
                });
            }
            return authorName;
        });
}
    
    // Main ============
document.addEventListener('DOMContentLoaded', () => {    
    const folderPath = 'Articles';
    
    fetch('Articles/articles.json')
        .then(response => response.json())
        .then(articles => {
            if (articles != null) {
                articles.forEach(article => {
                    // console.log(`file found`);
                    
                    createArticleBlock(article.id, article.name, article.publishDate, article.authors, article.summary);
                });
            }
        });
});