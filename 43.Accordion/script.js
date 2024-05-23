const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const accordionContent = this.parentElement.nextElementSibling;
    const isCurrentlyVisible = !accordionContent.classList.contains('accordion-none');
    const allAccordionBlocks = document.querySelectorAll('.accordion-block');
    allAccordionBlocks.forEach(block => {
      block.classList.add('accordion-none');
    })

    const allPlusSigns = document.querySelectorAll('.plus-sign');
    allPlusSigns.forEach(sign => {
      sign.classList.remove('plus-rotate');
    });

    if (!isCurrentlyVisible) {
      accordionContent.classList.toggle('accordion-none');
      
      const plusSign = this.querySelector('.plus-sign');
      if (plusSign) {
        plusSign.classList.toggle('plus-rotate');
      }
    }
  });
});

