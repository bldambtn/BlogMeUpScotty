//
document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("formData");
  const storedPosts = JSON.parse(localStorage.getItem("formData")) || [];
  //for loop
  for (let i = 0; i < storedPosts.length; i++) {
    const postData = storedPosts[i];
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <h3>${postData.title}</h3>
            <p>Username: ${postData.username}</p>
            <p>Content: ${postData.content}</p>
        `;
    postsContainer.appendChild(postElement);
  }
});