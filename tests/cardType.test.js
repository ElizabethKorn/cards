import { getCardType } from '../src/cardType';

describe('Определение платёжной системы', () => {
  test('Visa', () => {
    expect(getCardType('4111111111111111')).toBe('Visa');
  });

  test('MasterCard 51-55', () => {
    expect(getCardType('5500000000000004')).toBe('MasterCard');
  });

  test('MasterCard 2221-2720', () => {
    expect(getCardType('2221000000000009')).toBe('MasterCard');
  });

  test('American Express', () => {
    expect(getCardType('340000000000009')).toBe('American Express');
  });

  test('Неизвестная карта', () => {
    expect(getCardType('1234567890123456')).toBe('Unknown');
  });
});
