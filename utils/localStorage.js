export const getSavedBookIds = () => {
    const savedBookIds = localStorage.getItem('saved_books');
    return savedBookIds ? JSON.parse(savedBookIds) : [];
};

export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
    } else {
    localStorage.removeItem('saved_books');
    }
};

export const removeBookId = (bookId) => {
    const savedBookIds = getSavedBookIds();
    const updatedSavedBookIds = savedBookIds.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
    return updatedSavedBookIds.length !== savedBookIds.length;
};