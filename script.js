document.getElementById('numberInput').addEventListener('input', function() {
    const input = Number(this.value);
    const outputMessage = document.getElementById('outputMessage');

    if (input < 0) {
        outputMessage.textContent = 'Please enter a positive value.';
    } else if (input % 2 === 0) {
        const nextEvenNumbers = [input + 2, input + 4, input + 6];
        outputMessage.textContent = `Next 3 even numbers: ${nextEvenNumbers.join(', ')}`;
    } else {
        const nextOddNumbers = [input + 2, input + 4, input + 6];
        outputMessage.textContent = `Next 3 odd numbers: ${nextOddNumbers.join(', ')}`;
    }
});
