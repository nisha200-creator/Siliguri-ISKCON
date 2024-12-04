const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cardsWrapper = document.querySelector('.donation-cards');
let scrollPosition = 0; 

// Function to scroll left
leftArrow.addEventListener('click', () => {
    scrollPosition = Math.min(scrollPosition + 300, 0);
    cardsWrapper.style.transform = `translateX(${scrollPosition}px)`;
});

// Function to scroll right
rightArrow.addEventListener('click', () => {
    const maxScroll = -(cardsWrapper.scrollWidth - cardsWrapper.parentElement.offsetWidth); 
    scrollPosition = Math.max(scrollPosition - 300, maxScroll); 
    cardsWrapper.style.transform = `translateX(${scrollPosition}px)`;
});





// Select Elements
const popupModal = document.getElementById('popupModal');
const closeBtn = document.querySelector('.close-btn');

// Show the modal automatically after the page loads
window.onload = () => {
  popupModal.style.display = 'flex'; 
};

// Hide the modal when clicking the close button
closeBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === popupModal) {
    popupModal.style.display = 'none';
  }
});
