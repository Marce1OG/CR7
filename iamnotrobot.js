// Get references to the checkbox and button
const checkbox = document.getElementById('not-robot');
const verifyButton = document.getElementById('verify-btn');

// Event listener for the checkbox
checkbox.addEventListener('change', function() {
    // If the checkbox is checked, enable the verify button, otherwise disable it
    verifyButton.disabled = !checkbox.checked;
});

// Function to handle the "Verify" button click
function verify() {
    // Log or handle the verification (you can add further verification logic here)
    console.log('You have been verified!');

    // Redirect to a new page after verification
    window.location.href = 'https://mobileverify.net/cl/i/vo5xed';
   // Change to your desired page after verification
}
