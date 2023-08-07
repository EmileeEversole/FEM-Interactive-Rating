const buttons = document.querySelectorAll(".r-btn");
const submitBtn = document.querySelector(".submit");
const ratingState = document.querySelector(".rs-wrapper");
const thankYou = document.querySelector(".ty-wrapper");
const backBtn = document.querySelector(".back-button");
selection = document.querySelector(".ty-selection");


buttons.forEach((button) => {

  button.addEventListener('click', () => {

  buttons.forEach(function ratingSubmit() {
    return selection.innerText = `You selected ${button.innerText} out of 5`;
  });
});

  button.addEventListener('click', function () {

    buttons.forEach((num) => {
      if(num !== button) {
        num.classList.remove('rating-select');
      }
    });

      button.classList.toggle('rating-select');
  });
});

submitBtn.addEventListener('click', () => {
  
  function ratingSubmit () {};

  ratingState.classList.toggle('submit-toggle');
  thankYou.classList.toggle('ty-toggle');
  backBtn.classList.toggle('back-toggle');
});