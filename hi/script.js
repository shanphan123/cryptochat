document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (userInput.value.trim() === '') return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user-message');
    messageDiv.textContent = userInput.value;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message

    // Simulating a response (you can replace this with actual API calls)
    const botResponse = document.createElement('div');
    botResponse.classList.add('bot-message');
    botResponse.textContent = `Bot: You said "${userInput.value}"`;
    
    chatBox.appendChild(botResponse);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message

    userInput.value = ''; // Clear input
});
document.addEventListener("DOMContentLoaded", () => {
    const showCryptoBtn = document.querySelector(".show-crypto-btn");
    const cryptoSection = document.getElementById("cryptoSection");
  
    if (showCryptoBtn && cryptoSection) {
      showCryptoBtn.addEventListener("click", () => {
        const isVisible = cryptoSection.style.display === "flex";
        cryptoSection.style.display = isVisible ? "none" : "flex";
      });
    }
  });
  
