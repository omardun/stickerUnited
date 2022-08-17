const buttons = document.querySelectorAll('button');

const deleteSticker = async (id, button) => {
  try {
    const response = await fetch(`/stickers/${id}`, {
      method: 'DELETE',
    });
    const { message } = await response.json();

    if (message === 'success') {
      button.closest('.sticker').remove();
    }
  } catch {
    // handle error
  }
};

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const { id } = button.dataset;

    deleteSticker(id, button);
  });
}
