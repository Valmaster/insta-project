export const getPosts = async () => {
    let response = await fetch('http://localhost:3001/posts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export const postPosts = async (post) => {
    let response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}
