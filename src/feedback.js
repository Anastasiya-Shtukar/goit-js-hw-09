const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-email');
const message = document.querySelector('.feedback-message');

let savedfeedbackFormState = localStorage.getItem('feedback-form-state');
let parsedfeedbackFormState = JSON.parse(savedfeedbackFormState);
try {
  email.value = parsedfeedbackFormState['email'];
  message.value = parsedfeedbackFormState['message'];
} catch (error) {}

feedbackForm.addEventListener('input', function (event) {
  let feedbackFormState = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('All form fields must be filled in');
  }

  let savedfeedbackFormState = localStorage.getItem('feedback-form-state');
  let parsedfeedbackFormState = JSON.parse(savedfeedbackFormState);
  console.log(parsedfeedbackFormState);

  localStorage.removeItem('feedback-form-state');
});
