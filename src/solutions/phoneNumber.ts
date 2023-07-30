const DIGITS = ['', '', 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

export const letterCombinations = (digits: string): string[] => {
    if (!digits) { return []; }
    const queue = [''];
    const combos = [];
    
    while (queue.length > 0) {
        let str = queue[0];
        queue.shift();
        if (str.length === digits.length) {
            combos.push(str);
        } else {
            const listOfLetters = DIGITS[parseInt(digits[str.length])];
            for (let i = 0; i < listOfLetters.length; i++) {
                queue.push(str + listOfLetters[i]);
            }
        }
    }
    return combos;
}
