const db = require("../dbConfig")

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.post_body = data.post_body;

    }

    // finds all posts from database
    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM postsdb;`)
                const posts = postsData.rows.map(p => new Post(p))
                resolve(posts);
            } catch (err) {
                reject("Sorry No Posts Found")
            }
        })
    }

    //find by the given id
    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM postsdb WHERE id = $1;`, [id])
                let post = new Post(postData.rows[0])
                resolve(post)
            }
            catch (err) {
                reject('Error retrieving post')
            }
        })
    }

    //creates a new post
    static async create(postData) {
        return new Promise(async (resolve, reject) => {
            try {
                const { title, name, post_body } = postData;
                let result = await db.query(`INSERT INTO postsdb (title, name, post_body) VALUES ($1, $2, $3) RETURNING *;`, [title, name, post_body]);
                let newPost = new Post(result.rows[0])
                resolve(newPost);

            } catch (err) {
                reject('Post could not be created');
            }
        });
    };

}


module.exports = Post







