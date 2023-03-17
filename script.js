//your JS code here. If required.
const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');

// Add form submit event listener
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the input values
  const age = parseInt(ageInput.value);
  const name = nameInput.value.trim();

  // Validate the input values
  if (!age || !name) {
    alert('Please enter a valid age and name.');
    return;
  }

  // Create the Promise that resolves with an object after 4 seconds
  const promise1 = new Promise(resolve => {
    setTimeout(() => {
      resolve({ age, name });
    }, 4000);
  });

  // Chain promise1 with promise2 to extract a specific value from the object
  const promise2 = promise1.then(obj => obj.age);

  // Chain promise2 with promise3 to create a new object with the extracted value as a property
  const promise3 = promise2.then(age => ({ age }));

  // Chain promise3 with alert to show the final object
  promise3.then(obj => {
    if (obj.age >= 18) {
      alert(`Welcome, ${name}. You can vote.`);
    } else {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    }
  });
});