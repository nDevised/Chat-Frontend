// app.js

function sendMessage() {
    const messageInput = document.querySelector('input[name="message"]');
    const messagesBody = document.querySelector('.body');

    const userMessage = messageInput.value.trim();
    if (userMessage !== '') {
        const userMessageElement = document.createElement('p');
        userMessageElement.classList.add('message', 'user_msg');
        userMessageElement.textContent = userMessage;

        messagesBody.appendChild(userMessageElement);

        messageInput.value = '';
    }
}
