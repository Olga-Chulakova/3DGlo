import smoothScroll from './smooth-scroll.js';

const btnMenu = document.querySelector('.menu');
const menuNav = document.querySelector('menu');
const btnClose = menuNav.querySelector('.close-btn');
const menuItems = menuNav.querySelectorAll('ul>li>a');


const menu = () => {

    const handleMenu = () => {
        menuNav.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', handleMenu);
    btnClose.addEventListener('click', handleMenu);
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));

    menuItems.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(anchor);
        })
    })
}

export default menu;

// Второй вариант решения скролла - с requestAnimationFrame

//     menuItems.forEach(anchor => {
//         anchor.addEventListener('click', (e) => {
//             e.preventDefault();
//             const blockId = anchor.getAttribute('href').substring(1);
//             const targetBlock = document.getElementById(blockId);
//             if (targetBlock) {
//                 const top = targetBlock.offsetTop;
//                 const startPosition = window.scrollY;
//                 const distance = top - startPosition;
//                 const duration = 500;
//                 const startTime = Date.now();

//                 function animateScroll(startTime, startPosition, distance, duration) {
//                     const currentTime = Date.now();
//                     const elapsed = currentTime - startTime;
//                     const progress = Math.min(elapsed / duration, 1);
//                     const currentPosition = startPosition + distance * progress;
//                     window.scrollTo(0, currentPosition);

//                     if (progress < 1) {
//                         requestAnimationFrame(() => animateScroll(startTime, startPosition, distance, duration))
//                     }
//                 }

//                 animateScroll(startTime, startPosition, distance, duration);
//             }
//         })
//     })