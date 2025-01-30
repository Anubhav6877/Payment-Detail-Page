document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear previous error message

    // Validate card number (basic validation)
    if (!validateCardNumber(cardNumber)) {
        errorMessage.textContent = 'Please enter a valid card number.';
        return;
    }

    // Validate expiration date (MM/YY format)
    if (!validateExpiryDate(expiryDate)) {
        errorMessage.textContent = 'Please enter a valid expiration date (MM/YY).';
        return;
    }

    // Validate CVC (3 digits)
    if (!validateCVC(cvc)) {
        errorMessage.textContent = 'Please enter a valid CVC.';
        return;
    }

    // If all validations pass, simulate a payment submission
    alert('Payment successful!');
    document.getElementById('payment-form').reset(); // Clear form after successful payment
});

// Function to validate card number (basic length check for example purposes)
function validateCardNumber(cardNumber) {
    const regex = /^\d{16}$/; // Simplified, a real check would be more thorough
    return regex.test(cardNumber);
}

// Function to validate expiration date (MM/YY format)
function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiryDate);
}

// Function to validate CVC (3 digits)
function validateCVC(cvc) {
    const regex = /^\d{3}$/;
    return regex.test(cvc);
}
