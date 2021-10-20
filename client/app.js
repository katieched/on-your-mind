const btn = document.querySelector('#thoughts');
const displayPost = document.querySelector('#displayPost');

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


function appendPost(data) {
    console.log(data.title)
    const section = document.querySelector('#displayPost')
    // const divPosts = document.querySelector('#displayPost')
    const newDiv = document.createElement('div')
    const header = document.createElement('h3')
    const name = document.createElement('h4')
    const newPost = document.createElement('li')

    header.append(data.title)
    name.append(data.pseudonym)
    newPost.append(data.post_body)

    newDiv.append(header)
    newDiv.append(name)
    newDiv.append(newPost)

    section.append(newDiv)

};



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
btn.addEventListener('click', getPost); // try onClick



