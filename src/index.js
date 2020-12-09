import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButtonRef = document.querySelector('button[data-action="start"]');
const stopButtonRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

let timerId = null;
let isButtonStatus = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const clickButtonStart = () => {
  if (isButtonStatus) {
    return;
  }
  isButtonStatus = true;
  timerId = setInterval(() => {
    const colorBody = randomIntegerFromInterval(0, 5);
    bodyRef.style.backgroundColor = colors[colorBody];
  }, 1000);
};

const clickButtonStop = () => {
  isButtonStatus = false;
  clearInterval(timerId);
};
startButtonRef.addEventListener('click', clickButtonStart);
stopButtonRef.addEventListener('click', clickButtonStop);
