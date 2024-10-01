// script.js

document.getElementById("aadhaarForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting automatically
    
    const aadhaarInput = document.getElementById("aadhaar").value;
    const result = document.getElementById("result");
    const errorMsg = document.getElementById("error-msg");
    
    // Clear previous messages
    result.textContent = "";
    errorMsg.textContent = "";
    
    // Aadhaar validation
    if (validateAadhaar(aadhaarInput)) {
        result.textContent = "Aadhaar number is valid.";
        result.style.color = "green";
    } else {
        errorMsg.textContent = "Invalid Aadhaar number. Please enter a 12-digit number.";
    }
});

function validateAadhaar(aadhaar) {
    // Aadhaar must be a 12-digit numeric value
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(aadhaar);
}
