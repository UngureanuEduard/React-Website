export const listUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Something went wrong with the get of Users");
};

export const getUserById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Something went wrong with the get of User");
};

export const deleteUserById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('User deleted successfully');
        return; 
    }
    throw new Error("Something went wrong with the delete of User");
};

export const patchUser = async (id, data) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Something went wrong with the patch of User");
};

export const addUser = async (userData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Something went wrong with adding the new user");
};
