const postForm = document.forms.post;
const formTitle = postForm.elements.title;
const formText = postForm.elements.text;
const formBtn = postForm.elements.btn;

const blogContainer = document.querySelector('.blog-content');

function createNewPost (parent, title, text){
    const postBox = document.createElement('div');
    postBox.classList.add('post-box');
    parent.append(postBox);

    const postTitle = document.createElement('h3');
    postTitle.classList.add('post-title');
    postBox.append(postTitle);
    postTitle.textContent = title;

    const postText = document.createElement('p');
    postText.classList.add('post-text');
    postBox.append(postText);
    postText.textContent = text;
}