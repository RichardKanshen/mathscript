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
            .replaceAll("/", "÷").replaceAll("*", "×")
            .replaceAll(/[a-z]/g, match => `<mi>${match}</mi>`)
            .replaceAll(/([+\-=÷×])/g, operator => operators[operator] || operator)
            .replace(/[(]/g, () => {
                bracketsCount++;
                return '<mrow><mo>(</mo>';
            })
            .replace(/[)]/g, () => {
                bracketsCount--;
                return '<mo>)</mo></mrow>';
            })
            .replace(/\d+(\.\d+)?/g, match => `<mn>${match}</mn>`);
            

        
        if (bracketsCount !== 0) { result = "<mtext>Mismatched brackets!</mtext>"; return result; } else if (includemathtag == true) { return `<math>${result}</math>`; }else {return result;}
    }


};
String.prototype.MSConvertToHTML = function (includemathtag) {
    return MathScript.convertToMathML(this.valueOf(), includemathtag)
}