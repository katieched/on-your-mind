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
    // console.log(data.allPosts)
    console.log('reached');

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

// Fetch all cats as soon as app is loaded
// getAllDogs();

// ********************************************

//