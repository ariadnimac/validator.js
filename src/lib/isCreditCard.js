import assertString from './util/assertString';

/* A credit catd number consists of 10-19 digits structured as follows:
1. 6-8 digit Issue Identification Number (IIN)
2. up to 12 digits account identifier 
3. a single digit in the end calvulated with Luhn's algorithm
*/

/* eslint-disable max-len */
const creditCard = /^(?:4[0-9]{12,15}(?:[0-9]{3,6})?|5[0-9]{15}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */


export default function isCreditCard(str) {
  assertString(str); /* verify input is of type string */
  const sanitized = str.replace(/[- ]+/g, ''); /* clear string of other symbols */
  if (!creditCard.test(sanitized)) {
    return false;
  }
  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += ((tmpNum % 10) + 1);
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!((sum % 10) === 0 ? sanitized : false); /* cast to boolean and return */
}

