let generatedOTP;

document.getElementById('send-otp').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        console.log(`Generated OTP for ${email}: ${generatedOTP}`); // Simulate sending OTP
        alert(`OTP sent to ${email}: ${generatedOTP}`); // Simulate sending OTP
        document.getElementById('email-form').style.display = 'none';
        document.getElementById('otp-form').style.display = 'block';
        document.getElementById('message').textContent = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

document.getElementById('verify-otp').addEventListener('click', function() {
    const enteredOTP = document.getElementById('otp').value;
    if (enteredOTP == generatedOTP) {
        document.getElementById('message').textContent = 'OTP verified successfully!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid OTP, please try again.';
    }
});
