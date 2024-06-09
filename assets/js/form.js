// initiates blogForm variable from the form id
const blogForm = document.getElementById("form");

// event function to append form fields into
// an array in localStorage
blogForm.addEventListener("submit", function(event) {
  // removes default functionality;
  event.preventDefault();

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (username === "" || title === "" || content === "") {
    event.preventDefault;
  } else {
    let blogArray = JSON.parse(localStorage.getItem("blogData")) || [];
    const blogData = {
      username: username,
      title: title,
      content: content,
    };
    blogArray.push(blogData);
    localStorage.setItem("blogData", JSON.stringify(blogArray));

    window.location.href = "blog.html";
  }
});