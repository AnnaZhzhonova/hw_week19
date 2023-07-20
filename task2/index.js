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

function createPost (title, text) {
    const postBox = document.createElement('div');
    postBox.classList.add('post-box');
    blogContainer.append(postBox);

    const postTitle = document.createElement('h3');
    postTitle.classList.add('post-title');
    postBox.append(postTitle);
    postTitle.textContent = title;

    const postText = document.createElement('p');
    postText.classList.add('post-text');
    postBox.append(postText);
    postText.textContent = text;

    const newDate = new Date ();
    const postingDate = `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
    postBox.append(postingDate);
}


function postArticle() {
    const articleTitle = getArticleTitle ();
    const articleText = getArticleText ();

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify ({
            title: articleTitle,
            body: articleText,
        }),
    
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .then(json => createPost (json.title, json.body)) 
    .then(json => console.log(json));

    postForm.reset();
};


formBtn.addEventListener ('click', (event) => {
    event.preventDefault();
    postArticle();
})

