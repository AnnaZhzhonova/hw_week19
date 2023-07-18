const container = document.querySelector('.container');

function createArticles (parrent, title, text){
    const articleBox = document.createElement('div');
    articleBox.classList.add('article');
    const articleTitle = document.createElement('h2');
    articleTitle.textContent = title;

    const articleText = document.createElement('p');
    articleText.textContent = text;
    parrent.append(articleBox);
    articleBox.append(articleTitle, articleText);

}

fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: 'GET'
} )
.then(response => response.json())
.then((json) => {
    json.forEach(item => {
        createArticles(container, item.title, item.body)
    });

})
.catch((err) => {
  console.log('Error');
});