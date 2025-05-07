document.addEventListener('DOMContentLoaded', function() {
  // Array of strings to type out
  const textArray = [
      "Computer Sceince Student",
      "Web Developer",
      "UI/UX Designer",
      "Problem Solver"
  ];
  
  let textIndex = 0;    // Current text being typed
  let charIndex = 0;    // Current character position
  let isDeleting = false;
  let typingDelay = 100; // Delay between each character when typing
  let erasingDelay = 50; // Delay between each character when erasing
  let newTextDelay = 2000; // Delay before starting to erase text
  
  function typeText() {
      const currentText = textArray[textIndex];
      const typedTextElement = document.getElementById('typed-text');
      
      if (isDeleting) {
          // Erasing text
          typedTextElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingDelay = erasingDelay;
      } else {
          // Typing text
          typedTextElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingDelay = 100;
      }
      
      // Handle text completion or deletion
      if (!isDeleting && charIndex === currentText.length) {
          // Text fully typed, wait before deleting
          isDeleting = true;
          typingDelay = newTextDelay;
      } else if (isDeleting && charIndex === 0) {
          // Text fully deleted, move to next text
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
      }
      
      // Continue the typing/erasing loop
      setTimeout(typeText, typingDelay);
  }
  
  // Start the typing effect
  typeText();
  
  // Add cursor blinking effect
  setInterval(function() {
      const cursor = document.querySelector('.cursor');
      cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
  }, 500);
});


// Add this to your index.js file

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // Basic form validation
          if (!name || !email || !message) {
              alert('Please fill in all required fields.');
              return;
          }
          
          // In a real implementation, you would send this data to a server
          // This is just a placeholder to demonstrate the form functionality
          console.log('Form submitted with the following data:');
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Subject:', subject);
          console.log('Message:', message);
          
          // Show success message
          alert('Thank you for your message! I will get back to you soon.');
          
          // Reset form
          contactForm.reset();
      });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const nav = document.getElementById('navigation');
  
  hamburger.addEventListener('click', function() {
      this.classList.toggle('open');
      nav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('#navigation a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          hamburger.classList.remove('open');
          nav.classList.remove('active');
      });
  });
});
