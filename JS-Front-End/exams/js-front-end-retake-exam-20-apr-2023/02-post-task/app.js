window.addEventListener("load", solve);

function solve() {
    const publishButton = document.getElementById('publish-btn');
    const inputTaskTitle = document.getElementById('task-title');
    const inputTaskCategory = document.getElementById('task-category');
    const textareaEl = document.getElementById('task-content'); 
    const ulReviewListEl = document.getElementById('review-list');
    const ulPublishedListEl = document.getElementById('published-list');

    publishButton.addEventListener('click', () => {
        const title = inputTaskTitle.value;
        const category = inputTaskCategory.value;
        const textarea = textareaEl.value;

        if (!title || !category || !textarea) {
            return;
        }

        const hTitle= document.createElement('h4');
        hTitle.textContent = title;

        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${category}`;

        const pTextarea = document.createElement('p');
        pTextarea.textContent = `Content: ${textarea}`;

        const articleEl = document.createElement('article');
        const liEl = document.createElement('li');
        liEl.classList.add('rpost');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('action-btn', 'edit');
        buttonEdit.textContent = 'Edit';

        const buttonPost = document.createElement('button');
        buttonPost.classList.add('action-btn', 'post');
        buttonPost.textContent = 'Post';

        articleEl.appendChild(hTitle);
        articleEl.appendChild(pCategory);
        articleEl.appendChild(pTextarea);
        liEl.appendChild(articleEl);
        ulReviewListEl.appendChild(liEl);

        liEl.appendChild(buttonEdit);
        liEl.appendChild(buttonPost);

        inputTaskTitle.value = '';
        inputTaskCategory.value = '';
        textareaEl.value = '';

        buttonEdit.addEventListener('click', () => {
            inputTaskTitle.value = title;
            inputTaskCategory.value = category;
            textareaEl.value = textarea;

            liEl.remove();
        })

        buttonPost.addEventListener('click', () => {
            buttonEdit.remove();
            buttonPost.remove();
            ulPublishedListEl.appendChild(liEl);
        });
    })
}
