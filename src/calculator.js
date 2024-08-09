class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    }
  
    static parseExpression(expression) {
      const pattern = /(\d+\.?\d*)|([+\-*/])/g;
      const tokens = expression.match(pattern);
      return tokens;
    }
  
    static calculateExpression(tokens) {
      const operators = {
        '+': Calculator.add,
        '-': Calculator.subtract,
        '*': Calculator.multiply,
        '/': Calculator.divide
      };
  
      const numStack = [];
      const opStack = [];
  
      tokens.forEach(token => {
        if (!isNaN(token)) {
          numStack.push(parseFloat(token));
        } else {
          while (
            opStack.length &&
            (['*', '/'].includes(opStack[opStack.length - 1]) ||
              (['+', '-'].includes(opStack[opStack.length - 1]) &&
                ['+', '-'].includes(token)))
          ) {
            const operator = opStack.pop();
            const b = numStack.pop();
            const a = numStack.pop();
            const result = operators[operator](a, b);
            numStack.push(result);
          }
          opStack.push(token);
        }
      });
  
      while (opStack.length) {
        const operator = opStack.pop();
        const b = numStack.pop();
        const a = numStack.pop();
        const result = operators[operator](a, b);
        numStack.push(result);
      }
  
      return numStack[0];
    }
  }
  
  module.exports = Calculator;
  