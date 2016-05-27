describe('calculator tests', function() {

    it('should return 15 after adding 9 and 6', function() {
        var a = 9,
            b = 6,
            sum = calculator.add(a, b);
        expect(sum).toBe(15);
    }),

    it('should throw Error for not number arguments', function() {
        var a = 'dida',
            b = 5;
        expect(function() { calculator.add(a, b); }).toThrow(new Error("Wrong input!"));
    }),

    it('should return 3 after substractiong 9 and 6', function() {
        var a = 9,
            b = 6,
            result = calculator.substract(a, b);
        expect(result).toBe(3);
    }),

    it('should throw Error for not number arguments', function() {
        var a = 5,
            b = 'dida';
        expect(function() { calculator.substract(a, b); }).toThrow(new Error("Wrong input!"));
    }),

    it('should return 54 after multiplying 9 and 6', function() {
        var a = 9,
            b = 6,
            result = calculator.multiply(a, b);
        expect(result).toBe(54);
    }),

    it('should throw Error for not number arguments', function() {
        var a = 5,
            b = 'dida';
        expect(function() { calculator.multiply(a, b); }).toThrow(new Error("Wrong input!"));
    }),

    it('should return 2 after dividing 8 and 4', function() {
        var a = 8,
            b = 4,
            result = calculator.divide(a, b);
        expect(result).toBe(2);
    }),

    it('should throw Error for b = 0', function() {
        var a = 5,
            b = 0;
        expect(function() { calculator.divide(a, b); }).toThrow(new Error("Wrong input!"));
    }),

    it('should throw Error for b = 0', function() {
        var a = 5,
            b = 0;
        expect(function() { calculator.divide(a, b); }).toThrow(new Error("Wrong input!"));
    }),

    it('should return 120 after factorial of 5', function() {
        var a = 5,
            result = calculator.factorial(a);
        expect(result).toBe(120);
    }),

    it('should return 1 for a = 0', function() {
        var a = 0,
            result = calculator.factorial(a);
        expect(result).toBe(1);
    }),

    it('should return 1 for a = 1', function() {
        var a = 1,
            result = calculator.factorial(a);
        expect(result).toBe(1);
    })

    it('should throw error for a < 0', function() {
        var a = -5;
        expect( function() { calculator.factorial(a);}).toThrow(new Error("Wrong input!"));
    })

});
