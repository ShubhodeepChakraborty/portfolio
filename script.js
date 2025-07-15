document.addEventListener("DOMContentLoaded", () => {
    const spanElement = document.querySelector(".typing-text span");
    const words = JSON.parse(spanElement.getAttribute("data-text")); // Get words from the data attribute
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        charIndex--; // Remove characters
      } else {
        charIndex++; // Add characters
      }
  
      spanElement.textContent = currentWord.slice(0, charIndex);
  
      if (!isDeleting && charIndex === currentWord.length) {
        // Pause before deleting
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
  
    type();
  });
  