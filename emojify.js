function emojify(text) {
  fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'text': text }),
  })
  .then(response => response.json())
  .then(text => {
    console.log(text.emojified_text);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
