const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const userButton = document.getElementById('user-button');
const userInput = document.getElementById('name-input');
const nameTag = document.getElementById('name-here');

pinkButton.addEventListener('click', () => {
    const nametag = document.getElementById('nametag');
    nametag.style.background = 'pink';
});

blueButton.addEventListener('click', () => {
    const nametag = document.getElementById('nametag');
    nametag.style.background = 'steelblue';
});

greenButton.addEventListener('click', () => {
    const nametag = document.getElementById('nametag');
    nametag.style.background = 'green';
});

userButton.addEventListener('click', () => {
    const newInput = userInput.value;
    nameTag.textContent = newInput;
});
