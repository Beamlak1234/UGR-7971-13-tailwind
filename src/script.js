
const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });
 window.addEventListener('DOMContentLoaded', function() {
  var nameInput = document.getElementById('name');
  var submitButton = document.querySelector('button[type="submit"]');
  
  nameInput.addEventListener('input', function() {
    if (nameInput.value.length > 50) {
      nameInput.value = nameInput.value.slice(0, 50);
    }
  });
  
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Form submitted!');
   
  });
});