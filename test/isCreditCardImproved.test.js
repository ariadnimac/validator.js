const {isCreditCardImproved} = require('..src/lib/isCreditCardImproved.js');


 test('should accept this card',() => {
     const accepted = isCreditCardImproved('5900070000000003');
     expect(accepted).toBe(true);
 });

 test('should decline this card',() => {
    const accepted = isCreditCardImproved('59000700000000000930KG)');
    expect(accepted).toBe(false);
});