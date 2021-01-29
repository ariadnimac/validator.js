const {isCreditCardImproved} = require('..src/lib/isCreditCardImproved.js');


 test('should accept this card',() => {
     const accepted = isCreditCardImproved('5900070000000003');
     expect(accepted).toBe(true);
 });

 test('should decline this card',() => {
    const accepted = isCreditCardImproved('5900070000000000093');
    expect(accepted).toBe(false);
});