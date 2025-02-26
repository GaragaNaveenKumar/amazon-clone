import { formatCurrency } from "../scripts/utils/money.js";


describe('test suit: formatCurrancy',()=>{
    it('converts the cents to dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('working with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cents',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});