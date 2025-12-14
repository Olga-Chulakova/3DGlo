const greeting = document.querySelector('#greeting');
const day = document.querySelector('#day');
const time = document.querySelector('#time');
const newYearCount = document.querySelector('#newYearCount');

// 1. Получение приветствия Добрый день (утро, вечер, ночь в зависимости от времени суток):

const updateGreetingDay = () => {
    const currentHour = new Date().getHours();
    switch (true) {
        case (currentHour >= 0 && currentHour < 6):
            greeting.textContent = "Ночь";
            break;
        case (currentHour >= 6 && currentHour < 12):
            greeting.textContent = "Утро";
            break;
        case (currentHour >= 12 && currentHour < 18):
            greeting.textContent = "День";
            break;
        case (currentHour >= 18 && currentHour < 24):
            greeting.textContent = "Вечер";
            break;
    }
}

updateGreetingDay();

// 2. Получение дня недели:

const updateWeekDay = () => {
    const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const currentDay = new Date().getDay();
    day.textContent = week[currentDay];
}

updateWeekDay();

// 3.1 Получение реального времени:

const updateTime = () => {
    time.textContent = new Date().toLocaleTimeString('en');
}

setInterval(updateTime, 1000)

// 3.2 Второй вариант получения реального времени:

// let nowTime = new Date();
// let hours = nowTime.getHours();
// let minutes = nowTime.getMinutes();
// let seconds = nowTime.getSeconds();
// let format;

// if (hours >= 12) {
//     format = "PM"
// } else {
//     format = "AM"
// }

// if (hours === 0) {
//     hours = 12;
// } else if (hours > 12) {
//     hours = hours - 12;
// }

// hours = hours < 10 ? '0' + hours : hours;
// minutes = minutes < 10 ? '0' + minutes : minutes;
// seconds = seconds < 10 ? '0' + seconds : seconds;

// time.textContent = `${hours}:${minutes}:${seconds} ${format}`;


// 4.1 Получение количество дней до Нового года:

const updateNewYearDate = () => {
    const nowDate = new Date();
    const newYearDate = new Date('31 december 2025');
    const dateRemaining = Math.floor ((newYearDate - nowDate) / 1000 / 60 /60 / 24);
    newYearCount.textContent = dateRemaining;
}

updateNewYearDate();


// 4.2 Второй вариант получения количество дней до Нового года:

// const nowDate = Date.now();
// const newYearDate = Date.parse('31 december 2025');
// const dateRemaining = Math.floor ((newYearDate - nowDate) / 1000 / 60 /60 / 24);
// newYearCount.textContent = dateRemaining;