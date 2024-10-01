document.getElementById('send-otp').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        // Simulate sending OTP
        const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
        localStorage.setItem('otp', otp); // Store OTP in local storage
        document.getElementById('message').innerText = `OTP sent to ${phone}: ${otp}`; // Display OTP (for demo purposes)
        document.getElementById('otp-form').style.display = 'block'; // Show OTP form
    } else {
        document.getElementById('message').innerText = 'Please enter a valid phone number.';
    }
});

document.getElementById('verify-otp').addEventListener('click', function() {
    const enteredOtp = document.getElementById('otp').value;
    const storedOtp = localStorage.getItem('otp');

    if (enteredOtp === storedOtp) {
        document.getElementById('message').innerText = 'OTP verified successfully!';
    } else {
        document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
    }
});
