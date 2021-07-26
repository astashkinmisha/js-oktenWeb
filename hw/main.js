
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        let postsBox = document.getElementsByClassName('post-box')[0];
        for (const post of posts) {
            let pPost = document.createElement('p');
            pPost.innerText = `${post.id} - ${post.body}`;
            postsBox.appendChild(pPost);
        }
    });

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {

        let commentsBox = document.getElementsByClassName('comments-box')[0];
        for (const comment of comments) {
            let pComment = document.createElement('p');
            pComment.innerText = `${comment.id} - ${comment.body}`;
           commentsBox.appendChild(pComment);
        }
    });
