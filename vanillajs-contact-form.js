// //vanillajs-stuff
// Dark Mode Toggler
// function toggler() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

// // Intersecting Slide-in
// const items = document.querySelectorAll('.grid-item')

// const options = {
//   threshold: 0.5
// }

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//   if (entry.isIntersecting) {
//   entry.target.classList.add('slide-in'); }
//   });
// }, options)

// items.forEach(item => {
//   observer.observe(item);
// })

// //Form Validation
// const form = document.querySelector('form');
// const thankYou = document.querySelector('.thank-you');
// const nameInput = document.querySelector('input[name="name"]');
// const emailInput = document.querySelector('input[name="email"]');
// const messageInput = document.querySelector('textarea[name="message"]');


// let isFormValid = false;
// let isValidationOn = true;

// const resetElm = (elm) => {
//   elm.classList.remove("invalid");
//   elm.nextElementSibling.classList.add("hidden");
// }

// const invalidateElm = (elm) => {
//   elm.classList.add("invalid");
//   elm.nextElementSibling.classList.remove("hidden");
// }

// const validateInputs = () => {
//   if (!isValidationOn) return;

//   isFormValid = true;
//   resetElm(nameInput);
//   resetElm(emailInput);
//   resetElm(messageInput);

  
//   if (!nameInput.value) {
//    isFormValid = false;
//    invalidateElm(nameInput);
//   }

//   if (!emailInput.value) {
//    isFormValid = false;
//    invalidateElm(emailInput);
//    }

//    if (!messageInput.value) {
//     isFormValid = false;
//     invalidateElm(messageInput);
//    }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   isValidationOn = true;
//   validateInputs();
//   if (isFormValid) {
//     form.remove();
//     thankYou.classList.remove("hidden");
//   }
// })

// nameInput.addEventListener('input', () => {
//   validateInputs();
// })

// emailInput.addEventListener('input', (event) => {
//   console.log(event);
//   validateInputs();
// })

// messageInput.addEventListener('input', (event) => {
//   console.log(event);
//   validateInputs();
// })