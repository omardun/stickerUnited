
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const loginEl = document.querySelector('#login-button');


const handleLogin = async (payload) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),

    });
    const { message } = await response.json();

    if (message === 'success') {
      window.location.replace('/');
    }
  } catch { }
};


loginEl.addEventListener('click', async (event) => {
  event.preventDefault();

console.log("whatver");
  const email = emailEl.value;
  const password = passwordEl.value;
  const payload = {
    email,
    password,
  };
  console.log(payload)
  handleLogin(payload);
});
