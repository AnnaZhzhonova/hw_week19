const postForm = document.forms.post;
const formTitle = postForm.elements.title;
const formText = postForm.elements.text;
const formBtn = postForm.elements.btn;

const blogContainer = document.querySelector('.blog-content');

function getArticleTitle ()  {
    if (formTitle.value === "") {    
        throw new Error(`No title`)
    } 
    return formTitle.value;

};


function getArticleText () {
    if (formText.value === "") {    
        throw new Error(`No text`)
    } 
    return formText.value;

};

function createPostElement (title, text) {
    const postWrap = document.createElement('div');
    postWrap.classList.add('post-box');
    blogContainer.append(postWrap);

    postWrap.innerHTML = `<h2 class="title"bbbb>${title}</h2><p class="text">${text}</p>`
}

function createPostArticle(title, text) {

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify ({
            title: title,
            body: text,
        }),
    
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })

    .then(response => response.json())
    .then(json => createPostElement (json.title, json.body)) 

    .catch(error => console.error(error))
    .finally(console.log(`success`))
};




formBtn.addEventListener ('click', (event) => {
    event.preventDefault();
    const articleTitle = getArticleTitle ();
    const articleText = getArticleText ();
    createPostArticle(articleTitle, articleText);
    postForm.reset();
})

