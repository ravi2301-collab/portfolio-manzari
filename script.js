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