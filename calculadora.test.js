const { somar } = require('./calculadora')

describe('Teste da função somar', () => {
    test('Deveria somar 2 numeros inteiros positivos', () => {
        expect(somar(2,3)).toBe(5) 
        expect(somar(1,0)).toBe(1) 
        expect(somar(10,0)).toBe(10) 
    })
    test('Deveria somar 2 numeros inteiros negativos', () => {
        expect(somar(-1,-1)).toBe(-2)
    })
})