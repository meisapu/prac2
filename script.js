document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate Name (Required)
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Validate Email (Required + Format)
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            emailError.textContent = "Enter a valid email address";
            isValid = false;
        }
    }

    // Validate Password (Required + Min Length)
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").submit();
    }
});