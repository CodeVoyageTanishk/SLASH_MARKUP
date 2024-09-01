const lengthInput = document.getElementById('length');
const includeUppercaseInput = document.getElementById('includeUppercase');
const includeLowercaseInput = document.getElementById('includeLowercase');
const includeNumbersInput = document.getElementById('includeNumbers');
const includeSymbolsInput = document.getElementById('includeSymbols');
const passwordDisplay = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const copyMessage = document.getElementById('copyMessage');
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
    const length = lengthInput.value;
    const includeUppercase = includeUppercaseInput.checked;
    const includeLowercase = includeLowercaseInput.checked;
    const includeNumbers = includeNumbersInput.checked;
    const includeSymbols = includeSymbolsInput.checked;

    let characterPool = '';
    if (includeUppercase) characterPool += upperCaseChars;
    if (includeLowercase) characterPool += lowerCaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    passwordDisplay.value = password;
}

function copyToClipboard() {
    if (passwordDisplay.value) {
        passwordDisplay.select();
        document.execCommand('copy');
        copyMessage.textContent = 'Password copied to clipboard!';
        copyMessage.classList.add('visible');
        setTimeout(() => copyMessage.classList.remove('visible'), 2000);
    }
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
