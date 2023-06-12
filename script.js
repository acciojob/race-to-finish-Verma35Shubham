const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
  const text = textInput.value;
  const delay = delayInput.value;

  await new Promise(resolve => setTimeout(resolve, delay));

  outputDiv.innerText = text;
});