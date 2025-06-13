export function isValidCardNumber(number) {
    const digits = number.replace(/\D/g, '').split('').reverse().map(Number);
    const checksum = digits.reduce((sum, digit, index) => {
      if (index % 2 === 1) {
        const dbl = digit * 2;
        return sum + (dbl > 9 ? dbl - 9 : dbl);
      }
      return sum + digit;
    }, 0);
    return checksum % 10 === 0;
  }
  