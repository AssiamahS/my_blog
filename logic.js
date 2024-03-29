

const myForm = document.querySelector('#myForm');
function addForm(eventObj) {
    eventObj.preventDefault();

const BlogPosts = JSON.parse(localStorage.getItem('key')) || [];
    const inputBlog = {
        username: myForm.username.value,
        blogContent: myForm.querySelector('#blogContent').value,
        blogTitle: myForm.querySelector('#blogTitle').value };

    BlogPosts.push(inputBlog);
    // Store the updated BlogPosts array in localStorage
    localStorage.setItem('key', JSON.stringify(BlogPosts));

    console.log(inputBlog);
    // Storing blog post data in localStorage
   
    myForm.addEventListener("submit", addForm)

// Retrieving blog post data from localStorage
const retrievedPosts = JSON.parse(localStorage.getItem('key')) || [];
    console.log(retrievedPosts);}


    myForm.addEventListener("submit", addForm)
