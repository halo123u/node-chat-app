const expect = require('expect');
const {isRealString} = require('./validation')

    describe('isRealString', () =>{
        it('should reject non-string values', () =>{
            var validString = isRealString(12345);
            expect(validString).toBe(false); 
        });

        it('should reject empty strings', () =>{
            var validString = isRealString("     ");
            expect(validString).toBe(false);
        });

        it('should accept strings with non-space characters', () =>{
            var validString = isRealString(" thisisastring ");
            expect(validString).toBe(true);
        });
    });