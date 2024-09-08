function validateForm(event) {

    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    if (email.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Email is invalid.';
        isValid = false;
    }

    if (message.trim() === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
    }
    
}

document.getElementById('interactiveForm').addEventListener('submit', validateForm);
