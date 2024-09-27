// Function to check responses and throw errors if necessary
const checkResponse = async (response) => {
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
};

  // Route to get logged-in user's info (needs the token)
export const getMe = async (token) => {
    const response = await fetch('/api/users/me', {
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
    },
    });
    return await checkResponse(response);
};

  // Create a new user
export const createUser = async (userData) => {
    const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    });
    return await checkResponse(response);
};

  // Login user
export const loginUser = async (userData) => {
    const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    });
    return await checkResponse(response);
};

  // Save book data for a logged-in user
export const saveBook = async (bookData, token) => {
    const response = await fetch('/api/users', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
    });
    return await checkResponse(response);
};

  // Remove saved book data for a logged-in user
export const deleteBook = async (bookId, token) => {
    const response = await fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
        authorization: `Bearer ${token}`,
    },
    });
    return await checkResponse(response);
};

  // Search Google Books API
export const searchGoogleBooks = async (query) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
    return await checkResponse(response);
};
