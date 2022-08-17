const newEmailEl = document.querySelector('#newEmail');
const newPasswordEl = document.querySelector('#newPassword');
const createEl = document.querySelector('button');

const handleRegister = async (payload) => {
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const { message } = await response.json();

    if (message === 'success') {
      window.location.replace('/login');
    }
  } catch {
  }
};

createEl.addEventListener('click', (event) => {
  event.preventDefault();

  const newEmail = newEmailEl.value;
  const newPassword = newPasswordEl.value;
  const payload = {
    newEmail,
    newPassword,
  };

  handleRegister(payload);
});