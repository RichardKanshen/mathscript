const MathScript = {
    convertToMathML: function (input, includemathtag) {
        const operators = {
            '+': '<mo>+</mo>',
            '-': '<mo>-</mo>',
            '*': '<mo>×</mo>',
            '/': '<mo>÷</mo>',
            '×': '<mo>×</mo>',
            '÷': '<mo>÷</mo>',
            '=': '<mo>=</mo>'
        };
        let bracketsCount = 0;
    
        var result = input.valueOf()
            .replaceAll(/([+\-*/=÷×])/g, operator => operators[operator] || operator) // Operators
            .replace(/[(]/g, () => {
                bracketsCount++;
                return '<mrow><mo>(</mo>';
            }) // Opening Brackets
            .replace(/[)]/g, () => {
                bracketsCount--;
                return '<mo>)</mo></mrow>';
            }) // Closing Brackets
            .replace(/\d+(\.\d+)?/g, match => `<mn>${match}</mn>`); // Numbers
            

        
        if (bracketsCount !== 0) { result = "<mtext>Mismatched brackets!</mtext>"; return result; } else if (includemathtag == true) { return `<math>${result}</math>`; }else {return result;}
    }


};
String.prototype.MSConvertToHTML = function (includemathtag) {
    return MathScript.convertToMathML(this.valueOf(), includemathtag)
}