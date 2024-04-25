function validateForm() {
  var userName = document.getElementById('userName').value.trim();
  var password = document.getElementById('password').value.trim();
  var errorMessage = document.getElementById('errorMessage');

  errorMessage.textContent = ''; // Reset error message

  if (userName.length < 4) {
    errorMessage.textContent = 'Username must contain at least 4 letters.';
    return;
  }

  if (password.length === 0) {
    errorMessage.textContent = 'Password cannot be empty.';
    return;
  }

  if (password.length < 6 || password.length > 12) {
    errorMessage.textContent = 'Password must be between 6 and 12 characters.';
    return;
  }

  // Validation passed, you can submit the form or perform further actions
}

