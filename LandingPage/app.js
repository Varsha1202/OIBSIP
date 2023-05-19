// Get the form element
const form = document.querySelector("form");

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Get the form values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;

  // Perform validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
  } else {
    // Do something with the form data (e.g., send it to a server)
    alert("Form submitted successfully!");
    form.reset();
  }
});
