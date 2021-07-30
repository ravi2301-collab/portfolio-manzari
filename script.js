var header = document.querySelector('header');

document.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY > 0);
});


var menu= document.querySelector('.menu');
var navigation = document.querySelector('header ul');
const toggle = () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active')
};

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  const box = document.querySelectorAll('.box-animate');

  box.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  





