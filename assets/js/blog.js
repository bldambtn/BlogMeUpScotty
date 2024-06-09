// creates and event where locally sotred information is applied to the a new div tag and stored on the page in new divs every time new information is submitted on the submitforms page
document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts");
  const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  // For loop
  for (let i = 0; i < storedPosts.length; i++) {
    const postData = storedPosts[i];
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <h2>${postData.title}</h2>            
            <p>${postData.content}</p>
            <p>Username: ${postData.username}</p>
        `;
    postsContainer.appendChild(postElement);
  }
});
