function f(N1, N2, operator) {

    let result;
    let out;

    switch(operator) {

        case '+':

            result = N1 + N2;
            out = `${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;

        case '-':

            result = N1 - N2;
            out = `${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;

        case '*':
            
            result = N1 * N2;
            out = `${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;

        case '/':

            if (N2 === 0) {
                out = `Cannot divide ${N1} by zero`;
            }
            else {
                
                result = N1 / N2;
                out = `${N1} ${operator} ${N2} = ${result.toFixed(2)}`;
            }
            break;

        case '%':
            
            if (N2 === 0) {
                out = `Cannot divide ${N1} by zero`;
            }
            else {

                result = N1 % N2;
                out = `${N1} ${operator} ${N2} = ${result}`;
            }    
    }

    console.log(out);
}

f(10, 12, '+');    
f(123, 12, '/');  
f(112, 0, '/');   
f(10, 1, '-');     
f(10, 3, '%');     
f(10, 0, '%');    
f(7, 3, '*');     