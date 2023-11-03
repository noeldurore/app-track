/* sophisticated_code.js */

// This code implements a complex user management system with authentication and authorization.
// It consists of various classes and functions to handle registration, login, and access control.

// Class representing a user
class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

// Array storing registered users
let users = [];

// Function to register a new user
function register(username, password, role) {
  let newUser = new User(username, password, role);
  users.push(newUser);
}

// Function to login and authenticate a user
function login(username, password) {
  let user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    return true;
  } else {
    return false;
  }
}

// Function to check if a user has access to a resource
function hasAccess(user, resource) {
  if (user.role === 'admin') {
    return true;
  } else if (user.role === 'editor') {
    return resource.startsWith('/editor');
  } else {
    return false;
  }
}

// Function to handle user registration form submission
function handleRegistrationFormSubmit(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let role = document.getElementById('role').value;
  register(username, password, role);

  // Show success message
  showMessage('User registered successfully!');
}

// Function to handle user login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let isLoggedIn = login(username, password);

  if (isLoggedIn) {
    // Show success message
    showMessage('Logged in successfully!');
  } else {
    // Show error message
    showError('Invalid username or password');
  }
}

// Function to handle resource access request
function handleAccessRequest(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let resource = document.getElementById('resource').value;
  let user = users.find((user) => user.username === username);
  let hasResourceAccess = hasAccess(user, resource);

  if (hasResourceAccess) {
    // Grant access to the resource
    showAccessGrantedMessage('Access granted!');
  } else {
    // Deny access to the resource
    showAccessDeniedMessage('Access denied!');
  }
}

// Helper function to show success message
function showMessage(message) {
  let successMessage = document.getElementById('success-message');
  successMessage.textContent = message;
  successMessage.style.display = 'block';
}

// Helper function to show error message
function showError(message) {
  let errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Helper function to show access granted message
function showAccessGrantedMessage(message) {
  let accessGrantedMessage = document.getElementById('access-granted-message');
  accessGrantedMessage.textContent = message;
  accessGrantedMessage.style.display = 'block';
}

// Helper function to show access denied message
function showAccessDeniedMessage(message) {
  let accessDeniedMessage = document.getElementById('access-denied-message');
  accessDeniedMessage.textContent = message;
  accessDeniedMessage.style.display = 'block';
}

// Event listeners for form submissions
document.getElementById('registration-form').addEventListener('submit', handleRegistrationFormSubmit);
document.getElementById('login-form').addEventListener('submit', handleLoginFormSubmit);
document.getElementById('access-request-form').addEventListener('submit', handleAccessRequest);