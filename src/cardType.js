export function getCardType(number) {
    const bin = number.replace(/\D/g, '');
    const rules = [
      { type: 'Visa', regex: /^4/ },
      { type: 'MasterCard', regex: /^(5[1-5]|2[2-7])/ },
      { type: 'American Express', regex: /^3[47]/ },
    ];
  
    for (const rule of rules) {
      if (rule.regex.test(bin)) {
        return rule.type;
      }
    }
  
    return 'Unknown';
  }
  