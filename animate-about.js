const special = document.querySelector('.special');
appearOnScroll.observe(special);


const content = document.querySelector('.inner-facts-content');
appearOnScroll.observe(content);

const strengths = document.querySelector('.strengths');
appearOnScroll.observe(strengths);

const contact = document.querySelector('.inner-contact-box');
appearOnScroll.observe(contact);


const additional = document.querySelectorAll('.text-add');

additional.forEach(fader => {
    appearOnScroll.observe(fader);
  });

