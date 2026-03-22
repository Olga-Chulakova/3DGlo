import './styles/style.css';
import timer from './modules/timer.js';
import menu from './modules/menu.js';
import modal from './modules/modal.js';
import scrollToService from './modules/scroll-to-service.js';
import validation from './modules/validation.js';
import initValidationBlur from './modules/validation-blur.js';
import initTabs from './modules/tabs.js';
import slider from './modules/slider.js';
import sliderCarousel from './modules/sliderCarousel.js';
import calc from './modules/calc.js'
import sendForm from './modules/sendForm.js';


timer('18 april 2026');
menu();
modal();
scrollToService();
validation();
initValidationBlur();
initTabs();
slider();
sliderCarousel();
calc(100);
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form2'
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})



// Усложненное задание и вызов функции с объектом к уроку №23
// slider({
//   sliderBlockSelector: ".portfolio-content",
//   slidesSelector: ".portfolio-item",
//   slideActiveClass: "portfolio-item-active",
//   dotActiveClass: "dot-active"
// });