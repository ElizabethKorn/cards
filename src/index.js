import { isValidCardNumber } from './cardValidator';
import { getCardType } from './cardType';
import './style.css';
import visaLogo from "./images/visa.png";
import mastercardLogo from './images/mastercard.png';
import americanLogo from './images/american-express.png';

const logos = [
  { src: visaLogo, alt: 'Visa' },
  { src: mastercardLogo, alt: 'MasterCard' },
  { src: americanLogo, alt: 'American' },
];

const container = document.querySelector('#logos');
logos.forEach(({ src, alt }) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'card-logo';
  container.appendChild(img);
});

const input = document.querySelector('#card-number');
const result = document.querySelector('#result');
const logosElements = document.querySelectorAll('.card-logo');

input.addEventListener('input', () => {
  const number = input.value;
  const isValid = isValidCardNumber(number);
  const type = getCardType(number);

  result.textContent = isValid ? '✅ Валидная карта' : '❌ Невалидная карта';

  logosElements.forEach(img => {
    if (img.alt.toLowerCase() === type.toLowerCase()) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
});
