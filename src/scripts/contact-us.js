function submitForm(e) {
  e.preventDefault();

  submitBtn.classList.toggle('hidden');
  sendingBtn.classList.toggle('hidden');

  const formData = {
    name: this['name'].value,
    email: this['email'].value,
    message: this['message'].value,
  };

  fetch('https://formsubmit.co/ajax/jskbwk@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      this.reset();
      outputText.innerText = data.message;
      outputText.classList.add('text-success');
    })
    .catch((err) => {
      console.log(err);
      this.reset();
      outputText.innerText = err.message;
      outputText.classList.add('text-danger');
    })
    .finally(() => {
      outputText.classList.remove('hidden');
      submitBtn.classList.toggle('hidden');
      sendingBtn.classList.toggle('hidden');
    });
}

const contactForm = document.forms['contact-form'];
contactForm.addEventListener('submit', submitForm);

const outputText = contactForm.querySelector('#response');
const submitBtn = contactForm.querySelector('#submit-button');
const sendingBtn = contactForm.querySelector('#sending-button');
const resetBtn = contactForm.querySelector('#reset-button');

resetBtn.addEventListener('click', (e) => {
  outputText.innerText = '';
  outputText.classList.add('hidden');
});
