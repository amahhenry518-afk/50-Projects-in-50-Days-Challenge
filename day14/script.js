
const passwordDisplay = document.getElementById('password-display');
const lengthInput = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');


const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';


lengthInput.addEventListener('input', (e) => {
    lengthVal.textContent = e.target.value;
});


function generatePassword() {
    let charPool = '';
    let mandatoryChars = '';

    if (uppercaseInput.checked) {
        charPool += uppercaseChars;
        mandatoryChars += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (lowercaseInput.checked) {
        charPool += lowercaseChars;
        mandatoryChars += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (numbersInput.checked) {
        charPool += numberChars;
        mandatoryChars += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if (symbolsInput.checked) {
        charPool += symbolChars;
        mandatoryChars += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    
    if (charPool === '') {
        alert('Please select at least one character type.');
        return 'Select an option';
    }

    const desiredLength = parseInt(lengthInput.value);
    let remainingLength = desiredLength - mandatoryChars.length;
    let generatedPassword = mandatoryChars;

    
    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        generatedPassword += charPool[randomIndex];
    }

    
    return generatedPassword.split('').sort(() => Math.random() - 0.5).join('');
}


generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordDisplay.textContent = password;
    if(password !== 'Select an option') {
        passwordDisplay.classList.add('active');
    } else {
        passwordDisplay.classList.remove('active');
    }
});


copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.textContent;
    
    if (!password || password === 'Click Generate' || password === 'Select an option') {
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
});
