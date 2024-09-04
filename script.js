document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('thankYouBtn');
    const message = document.getElementById('thankYouMessage');

    button.addEventListener('click', () => {
        message.textContent = 'Thank you for appreciating our teachers!';
        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    });
});
