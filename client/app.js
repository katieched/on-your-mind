const btn = document.querySelector('#test');
const displayPost = document.querySelector('#displayPost');

// Bind event listeners
function getPost() {
    fetch('http://localhost:3000/posts')
        .then(r => {
            return r.json()
        })
        .then(appendPosts)
        .catch(console.warn)
};

function appendPosts(data) {
    data.allPosts.forEach(appendPost)
};

// const dogData = {
//     name: e.target.name.value,
//     age: e.target.age.value
// };

function appendPost(data) {
    console.log(data.title)
    const section = document.querySelector('#displayPost')
    const header = document.createElement('h3')
    const name = document.createElement('h6')
    const newPost = document.createElement('li')

    header.append(data.title)
    name.append(data.pseudonym)
    newPost.append(data.post_body)
    section.append(header)
    section.append(name)
    section.append(newPost)
};

btn.addEventListener('click', getPost); // try onClick

const formBtn = document.querySelector('#submitForm')

const titleBar = document.querySelector('#title')
const nameBar = document.querySelector('#name')
const messageBar = document.querySelector('#message')

function submitPost(e) {
    e.preventDefault();
    console.log(e)
    const postData = {
        title: titleBar.value,
        pseudonym: nameBar.value,
        post_body: messageBar.value
        // title: e.target.title.value,
        // pseudonym: e.target.name.value,
        // post_body: e.target.message.value
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };
    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        // .then(() => e.target.reset())
        .catch(console.warn)
};

formBtn.addEventListener('click', submitPost)

// Fetch all cats as soon as app is loaded
// getAllDogs();

// ********************************************

//