const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

const displayPosts = (posts) => {
    const postList = document.getElementById('post-data');

    if (postList.innerHTML !== '') {
        postList.innerHTML = '';
        return;
    }

    try {
        posts.forEach(post => {
            const postElement = document.createElement('li');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>`;

            postList.appendChild(postElement);
        });
    } catch (error) {
        throw new Error('Error manipulating DOM: ' + error.message);
    }
}

//getPosts();