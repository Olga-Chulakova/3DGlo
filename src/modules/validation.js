import { RULES } from "./validation-rules.js";

const inputs = document.querySelectorAll("input.calc-item");
const inputsName = document.querySelectorAll('input[type="text"][placeholder="Ваше имя"]');
const inputsMessage = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
const inputsMail = document.querySelectorAll('input[type="email"]');
const inputsTel = document.querySelectorAll('input[type="tel"]');

const validation = () => {
    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(RULES.number, "");
        });
    });

    inputsName.forEach((inputName) => {
        inputName.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(RULES.name, "");
        });
    });

    inputsMail.forEach((inputMail) => {
        inputMail.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(RULES.email, "");
        });
    });

    inputsTel.forEach((inputTel) => {
        inputTel.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(RULES.tel, "");
        });
    });

    inputsMessage.forEach((inputMessage) => {
        inputMessage.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(RULES.message, "");
        });
    });
};

export default validation;

// Начальный подробный вариант кода

// const validation = () => {
//     inputs.forEach((input) => {
//         input.addEventListener('input', (e) => {
//             e.target.value = e.target.value.replace(/[^\d]/g, '');
//         })
//     })

//     inputsText.forEach(inputText => {
//         inputText.addEventListener('input', (e) => {
//             e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
//         })
//     })

//     inputsMail.forEach(inputMail => {
//         inputMail.addEventListener('input', (e) => {
//             e.target.value = e.target.value.replace(/[^\w@\-.!~*']/gi, '');
//         })
//     })

//     inputsTel.forEach(inputTel => {
//         inputTel.addEventListener('input', (e) => {
//             e.target.value = e.target.value.replace(/[^\d\-()]/g, '');
//         })
//     })
// }

// export default validation;
