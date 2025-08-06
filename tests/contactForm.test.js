/** @jest-environment jsdom */

// JSDOM will automatically create a document for us
document.body.innerHTML = `
  <form id="contact-form"></form>
  <div id="success-message" style="display:none"></div>
`;

// Require the script after setting up DOM so it can attach event listener
require('../scripts/script.js');

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

test('submitting the form toggles success message', () => {
  // Ensure initial state
  expect(successMessage.style.display).toBe('none');

  // Dispatch submit event
  const event = new Event('submit');
  form.dispatchEvent(event);

  // After submit, success message should be visible
  expect(successMessage.style.display).toBe('block');
});
