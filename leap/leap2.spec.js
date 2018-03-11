import isLeapYear from './leap2';

describe('isLeapYear', () => {
    test('Deveria retornar true para anos nao multiplos de 400 e multiplos de 4', () => {
        expect(isLeapYear(1996)).toBe(true);
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2016)).toBe(true);
    });

    test('Deveria retornar falso para anos nao multiplos de 400 e nao multiplos de 4', () => {
        expect(isLeapYear(1995)).toBe(false);
    });

    test('Deveria retornar true para todos os anos múltiplos de 400', () => {
        expect(isLeapYear(1600)).toBe(true);
    });
});
