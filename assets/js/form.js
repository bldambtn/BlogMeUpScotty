// Initiate variable using ID in HTML,
// captured as user enters info in the form fields
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const msgDiv = document.querySelector("#msg");
const submitInput = document.querySelector("#submit-btn");

// Function to display error message if
// user fails to enter all fields
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

// function to submit the form
// event listener to trigger function upon submission
submitInput.addEventListener("click", function (event) {
  //prevents default behavior
  event.preventDefault();

  // sets function specific variables based on the value that the user enters
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  // if... else statement to trigger error logic
  // all fields must be filled out to submit
  if (username === "") {
    displayMessage("error", "Please complete the form to post.");
  } else if (title === "") {
    displayMessage("error", "Please complete the form to post.");
  } else if (content === "") {
    displayMessage("error", "Please complete the form to post.");
  } else {
    location.replace("./blog.html");
  }

  // Store inputs into the local storage
  localStorage.setItem("username", username);
  localStorage.setItem("title", title);
  localStorage.setItem("content", content);
});
