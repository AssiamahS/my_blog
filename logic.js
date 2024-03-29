

const myForm = document.querySelector('#myForm')
function addForm(eventObj){
    eventObj.preventDefault()

const BlogPost = JSON.parse(localStorage.getItem('key')) || [];
    const inputBlog = {
        username: myForm.username.value,
        blogContent: myForm.querySelector('#blogContent').value,
        blogTitle: myForm.querySelector('#blogTitle').value
    }
    BlogPost.push(inputBlog)
    console.log(inputBlog);

    // Storing blog post data in localStorage
   
    localStorage.setItem('key', JSON.stringify(inputBlog));
}
    // Retrieving blog post data from localStorage
    const retrievedPost = JSON.parse(localStorage.getItem('key'));
    console.log(retrievedPost);


    myForm.addEventListener("submit", addForm)
