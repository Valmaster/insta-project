import axios from "axios";

export const getPosts = async () => {
    let response = await fetch('http://localhost:3001/publications', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export const postPosts = async (post) => {
    return axios.post('http://localhost:3001/publications', post);
}

export const patchPosts = async (id, post) => {
    return axios.patch('http://localhost:3001/publications/' + id, post);
}

export const deletePost = async (id, post) => {
    return axios.delete('http://localhost:3001/publications/' + id, post);
}
