document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var firstname = document.getElementById("id_firstName").value;
  var lastname = document.getElementById("id_lastName").value;
  var contact = document.getElementById("id_contact").value;
  var email = document.getElementById("id_email").value;
  var username = document.getElementById("id_username").value;
  var password = document.getElementById("id_password").value;


  // Perform validation or further processing
  // For demonstration purposes, we'll log the values to the console
  console.log("First Name:", firstname);
  console.log("Last Name:", lastname);
  console.log("Contact:", contact);
  console.log("Email:", email);
  console.log("Username:", username);
  console.log("Password:", password);

  // You can also send the form data to a server using AJAX or fetch
  // for further processing or authentication
});
