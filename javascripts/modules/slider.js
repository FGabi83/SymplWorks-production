function slider() {
    const testimonialsWrapper = document.querySelector('.js-testimonials-div');
    const testimonials = document.querySelectorAll('.js-testimonial');
    const next = document.querySelector('.js-next');
    const prev = document.querySelector('.js-previous');
    const dot = document.querySelectorAll('.js-dot');
    
    const toggleTestimonials = () => {
      testimonials.forEach(testimonial => {
        testimonial.classList.toggle('js-transform');
      });
    };

    const toggleDots = () => {
      if(dot[0].classList.contains('js-dot__active')) {
        dot[0].classList.remove('js-dot__active');
        dot[1].classList.add('js-dot__active');
      } else {
        dot[1].classList.remove('js-dot__active');
        dot[0].classList.add('js-dot__active');
      }
    };

    const handleClick = () => {
      toggleTestimonials();
      toggleDots();
    };

    //when clicking next, js-tranform class should be toggled to all testimonials regardless of its index either all have js-dot__active or none
    next.addEventListener('click', handleClick);

    //when clicking previous, js-transform class should be toggled to all testimonials regardless of its index either all have js-dot__active or none
    prev.addEventListener('click', handleClick);

    // TOUCHSCREEN
  let touchstartX = 0;
  let touchendX = 0;

  const handleTouchStart = (event) => {
    touchstartX = event.changedTouches[0].screenX;
  };

  const handleTouchMove = (event) => {
    touchendX = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchendX - touchstartX;
    if (Math.abs(deltaX) >= 30) { // Csak akkor kezeljük, ha az elmozdulás legalább 30 pixel
      if (deltaX < 0) {
        if (testimonials[0].classList.contains('js-transform')) {
          return; // Ha már balra van tolva, akkor ne csináljon semmit
        } else {
          handleClick();// Balra pöccintés
        }
       
      } else if (deltaX > 0) {
        if (!testimonials[0].classList.contains('js-transform')) {
          return; // Ha már jobbra van tolva, akkor ne csináljon semmit
        } else {
          handleClick();// Jobbra pöccintés
        }
      
      }
    }
  };
  
    testimonialsWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    testimonialsWrapper.addEventListener('touchmove', handleTouchMove, { passive: true });
    testimonialsWrapper.addEventListener('touchend', handleTouchEnd);
   
 
  

}
  
  export default slider;