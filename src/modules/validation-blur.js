import {RULES, collapseSpaces, collapseDashes, trimEdges} from './validation-rules.js';

const inputsText = document.querySelectorAll('input[type="text"][placeholder="Ваше имя"]');
const inputsMail = document.querySelectorAll('input[type="email"]');
const inputsTel = document.querySelectorAll('input[type="tel"]');

const formatText = (value) => {
    value = value.replace(RULES.text, '');
    value = value.replace(collapseSpaces, ' ');
    value = value.replace(collapseDashes, '-');
    value = value.replace(trimEdges, '');
    return value;
}

const formatEmail = (value) => {
    value = value.replace(RULES.email, '');
    value = value.replace(collapseDashes, '-');
    value = value.replace(trimEdges, '');
    return value;
}

const formatTel = (value) => {
    value = value.replace(RULES.tel, '');
    value = value.replace(collapseDashes, '-');
    value = value.replace(trimEdges, '');
    return value;
}

const initValidationBlur = () => {
    inputsText.forEach(input => {
        input.addEventListener('blur', (e) => {
            e.target.value = formatText(e.target.value);
        });
    });
    inputsMail.forEach(input => {
        input.addEventListener('blur', (e) => {
            e.target.value = formatEmail(e.target.value);
        });
    });
    inputsTel.forEach(input => {
        input.addEventListener('blur', (e) => {
            e.target.value = formatTel(e.target.value);
        });
    });
};

export default initValidationBlur;


// Начальный подробный вариант кода

// const initValidationBlur = () => {
//     inputsText.forEach((inputText) => {
//         inputText.addEventListener('blur', (e) => {
//             let value = e.target.value;
//             value = value.replace(/[^а-яА-Я\s-]/gi, '');
//             value = value.replace(/\s+/g, ' ');
//             value = value.replace(/-+/g, '-');
//             value = value.replace(/^[\s-]+|[\s-]+$/g, '');
//             value = value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

//             e.target.value = value;
//         })
//     })

//     inputsMail.forEach(inputMail => {
//         inputMail.addEventListener('blur', (e) => {
//             let valueMail = e.target.value;
//             valueMail = valueMail.replace(/[^\w@\-.!~*']/gi, '');
//             valueMail = valueMail.replace(/-+/g, '-');
//             valueMail = valueMail.replace(/^[\s-]+|[\s-]+$/g, '');

//             e.target.value = valueMail;
//         })
//     })

//     inputsTel.forEach(inputTel => {
//         inputTel.addEventListener('blur', (e) => {
//             let valueTel = e.target.value;
//             valueTel = valueTel.replace(/[^\d\-()]/g, '');
//             valueTel = valueTel.replace(/-+/g, '-');
//             valueTel = valueTel.replace(/^[\s-]+|[\s-]+$/g, '');

//             e.target.value = valueTel;
//         })
//     })

// }

// export default initValidationBlur;