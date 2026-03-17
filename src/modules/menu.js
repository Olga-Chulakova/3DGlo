import smoothScroll from './smooth-scroll.js';

const header = document.querySelector('header');
const menuNav = document.querySelector('menu');

const menu = () => {

    const handleMenu = () => {
        menuNav.classList.toggle('active-menu');
    }

    header.addEventListener('click', (e) => {
         if (e.target.closest('.menu')) {
           handleMenu();
         }
    })

    menuNav.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
            handleMenu();
        }

        if (e.target.closest('ul>li>a')) {
            e.preventDefault();
            smoothScroll(e.target);
            handleMenu();
        }
    })
}

export default menu;

// Усложненное задание открытие и закрытие меню на глобальный документ

// const menu = () => {

//     const toggleMenu = () => {
//         menuNav.classList.toggle('active-menu');
//     }

//     document.addEventListener('click', (e) => {
//         if (e.target.closest('.menu')) {
//             toggleMenu();
//         } else if (e.target.closest('.close-btn')) {
//             toggleMenu();
//         } else if (e.target.closest('ul>li>a')) {
//             e.preventDefault();
//             smoothScroll(e.target);
//             toggleMenu();
//         } else if (!e.target.closest('menu')) {
//             menuNav.classList.remove('active-menu');
//         }
//     })
// }

// export default menu;




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