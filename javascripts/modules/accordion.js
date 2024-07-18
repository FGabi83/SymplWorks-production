function accordion() {
  const faqQuestions = document.querySelectorAll(".js-question");
    
  faqQuestions.forEach(question => {
    question.addEventListener("click", function() {
      const icon = this.querySelector(".js-question-toggle");
      const answer = this.nextElementSibling;
      const text = this.querySelector(".js-question-text"); 

      // Toggle the visibility of the answer
      answer.classList.toggle("visible");

      // Toggle the icon direction
      icon.classList.toggle("rotated");

      // Toggle the bold style of the question
      text.classList.toggle("bold");
    });
  }); 
};
  
  export default accordion;