import assertString from './util/assertString';

/*This an improved version of the isCreditCard module */

/* A credit catd number consists of 10-19 digits structured as follows:
1. 6-8 digit Issue Identification Number (IIN)
2. up to 12 digits account identifier 
3. a single digit in the end calvulated with Luhn's algorithm
*/

/* eslint-disable max-len */
const creditCard = /^(?:4[0-9]{12,15}(?:[0-9]{3,6})?|5[0-9]{15}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */


export default function isCreditCardImp(str){
    assertString(str); /* verify input is of type string */
    stripped = str.replace(/[- ]+/g, ''); /* clear string of other symbols */
    if (stripped.length > 19 | stripped.length < 10){
        return false; /* decline numbers that don't have the appropriate length */
    }else{
        if (!creditCard.test(stripped)) { /*match number with regex expression */
            return false;
        }else{
            return true;
        }
    }
    
    
}