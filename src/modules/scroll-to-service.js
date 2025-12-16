import smoothScroll from './smooth-scroll.js';

const main = document.querySelector('main');
const btnScroll = main.querySelector('a[href="#service-block"]');

const scrollToService = () => { 
    btnScroll.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(btnScroll);
    })
}

export default scrollToService;
