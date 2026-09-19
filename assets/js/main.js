document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navToggle && navMenu && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('hidden');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      let valid = true;
      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const subject = document.getElementById('contact-subject');
      const message = document.getElementById('contact-message');

      const setError = (input, msg) => {
        valid = false;
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.textContent = msg;
        input.classList.add('border-red-500');
      };

      const clearError = (input) => {
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.textContent = '';
        input.classList.remove('border-red-500');
      };

      [name, email, subject, message].forEach((input) => clearError(input));

      if (!name.value.trim()) {
        setError(name, 'Name is required.');
      }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        setError(email, 'Please enter a valid email address.');
      }
      if (!subject.value.trim()) {
        setError(subject, 'Subject is required.');
      }
      if (!message.value.trim()) {
        setError(message, 'Message is required.');
      }

      if (valid) {
        alert('Your message has been sent successfully!');
        contactForm.submit();
      }
    });
  }

  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const fields = {
        name: document.getElementById('signup-name'),
        email: document.getElementById('signup-email'),
        password: document.getElementById('signup-password'),
        confirmPassword: document.getElementById('signup-confirm-password'),
      };
      const terms = document.getElementById('signup-terms');
      let valid = true;

      Object.values(fields).forEach((field) => {
        const error = field.parentElement.querySelector('.error-message');
        if (error) error.textContent = '';
        field.classList.remove('border-red-500');
      });

      if (!fields.name.value.trim()) {
        valid = false;
        const error = fields.name.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Full name is required.';
        fields.name.classList.add('border-red-500');
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
        valid = false;
        const error = fields.email.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Please enter a valid email.';
        fields.email.classList.add('border-red-500');
      }
      if (fields.password.value.length < 8) {
        valid = false;
        const error = fields.password.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Password must be at least 8 characters.';
        fields.password.classList.add('border-red-500');
      }
      if (fields.password.value !== fields.confirmPassword.value) {
        valid = false;
        const error = fields.confirmPassword.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Passwords do not match.';
        fields.confirmPassword.classList.add('border-red-500');
      }
      if (!terms.checked) {
        valid = false;
        const error = document.getElementById('terms-error');
        if (error) error.textContent = 'You must accept the terms and conditions.';
      }

      if (valid) {
        alert('Account created successfully!');
        signupForm.submit();
      }
    });
  }

  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('signin-email');
      const password = document.getElementById('signin-password');
      let valid = true;

      const clear = (input) => {
        if (input) {
          const error = input.parentElement.querySelector('.error-message');
          if (error) error.textContent = '';
          input.classList.remove('border-red-500');
        }
      };

      clear(email); clear(password);

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        valid = false;
        const error = email.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Enter a valid email.';
        email.classList.add('border-red-500');
      }
      if (password.value.length < 8) {
        valid = false;
        const error = password.parentElement.querySelector('.error-message');
        if (error) error.textContent = 'Password must be at least 8 characters.';
        password.classList.add('border-red-500');
      }

      if (valid) {
        alert('Sign in successful!');
        signinForm.submit();
      }
    });
  }
});
