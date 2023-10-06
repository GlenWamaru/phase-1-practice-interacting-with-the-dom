document.addEventListener('DOMContentLoaded', () => {
    // Function to update the timer
    function updateTimer() {
      const timerElement = document.getElementById('counter');
      let count = parseInt(timerElement.textContent);
      count++;
      timerElement.textContent = count;
    }
  
    // Start the timer when the page loads
    let timerInterval = setInterval(updateTimer, 1000);
  
    // Get the plus and minus buttons
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const counter = document.getElementById('counter');
  
    // Add click event listeners
    plusButton.addEventListener('click', () => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  
    minusButton.addEventListener('click', () => {
      counter.textContent = parseInt(counter.textContent) - 1;
    });
  
    // Get the like button and ul element for likes
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
  
    // Initialize an empty object to store likes
    const likedNumbers = {};
  
    // Add click event listener to the like button
    likeButton.addEventListener('click', () => {
      const currentNumber = counter.textContent;
  
      // Check if this number has been liked before
      if (likedNumbers[currentNumber]) {
        likedNumbers[currentNumber]++;
        const li = document.querySelector(`[data-number="${currentNumber}"]`);
        li.textContent = `${currentNumber} has been liked ${likedNumbers[currentNumber]} times`;
      } else {
        likedNumbers[currentNumber] = 1;
        const li = document.createElement('li');
        li.textContent = `${currentNumber} has been liked 1 time`;
        li.setAttribute('data-number', currentNumber);
        likesList.appendChild(li);
      }
    });
  
    // Get the pause button
    const pauseButton = document.getElementById('pause');
  
    // Add click event listener to the pause button
    pauseButton.addEventListener('click', () => {
      if (pauseButton.textContent === 'pause') {
        clearInterval(timerInterval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.textContent = 'resume';
      } else {
        timerInterval = setInterval(updateTimer, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.textContent = 'pause';
      }
    });
  
    // Get the restart button
    const restartButton = document.getElementById('restart');
  
    // Add click event listener to the restart button
    restartButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      counter.textContent = '0';
      likedNumbers = {};
      likesList.innerHTML = '';
      timerInterval = setInterval(updateTimer, 1000);
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.textContent = 'pause';
    });
  
    // Get the comment form and comment list
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('list');
  
    // Add submit event listener to the comment form
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
  
      if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
  