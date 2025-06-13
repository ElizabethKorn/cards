import { isValidCardNumber } from '../src/cardValidator';

describe('Проверка алгоритма Луна', () => {
  test('валидный номер Visa', () => {
    expect(isValidCardNumber('4111111111111111')).toBe(true);
  });

  test('валидный номер MasterCard', () => {
    expect(isValidCardNumber('5500000000000004')).toBe(true);
  });

  test('валидный номер American Express', () => {
    expect(isValidCardNumber('340000000000009')).toBe(true);
  });

  test('невалидный номер', () => {
    expect(isValidCardNumber('1234567890123456')).toBe(false);
  });

  test('валидный номер с пробелами', () => {
    expect(isValidCardNumber('4111 1111 1111 1111')).toBe(true);
  });
});
