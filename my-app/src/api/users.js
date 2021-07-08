export const getUsers = async () => {
    let response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export const postUser = async (user) => {
    let response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}
