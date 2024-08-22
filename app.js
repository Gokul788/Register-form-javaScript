document.addEventListener('DOMContentLoaded',function(){
    var nameInput = document.getElementById("inputBox-1");
    var emailInput = document.getElementById("inputBox-2");
    var passwordInput = document.getElementById("inputBox-3");
    var submitButton = document.getElementById("btn");
    
    var nameError = document.getElementById('error-1');
    var emailError = document.getElementById('error-2');
    var passwordError = document.getElementById('error-3');
    
    function validateName (){
        if (nameInput.value.trim() === '' || nameInput.value.trim() === null) {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    };
    
    function validateEmail(){
        var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailPattern.test (emailInput.value.trim()) ) {
            emailError.style.display = 'none';
            return true;
        } else {
            emailError.textContent = 'Invalid email address';
            emailError.style.display = 'block';
            
            return false;
        }
    };
    
    function validatePassword(){
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    };
    
    function validateForm() {
        var NameValid = validateName();
        var EmailValid = validateEmail();
        var PasswordValid = validatePassword();
        
        submitButton.disabled = !(NameValid && EmailValid && PasswordValid);
    };
    
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    
    validateForm();  // Initial check
});
