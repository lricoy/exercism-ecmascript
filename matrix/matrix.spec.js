import Matrix from './matrix';

describe('Matrix', () => {
  test('can extract a row', () => {
    expect(new Matrix('1 2\n10 20').rows[0]).toEqual([1, 2]);
  });

  test('can extract the other row', () => {
    expect(new Matrix('9 8 7\n19 18 17').rows[1]).toEqual([19, 18, 17]);
  });

  test('can extract a column', () => {
    expect(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1])
      .toEqual([1903, 3, 4]);
  });

  // describe.only('recursive ', () => {
  //   test('it should not have a stack overflow', () => {
  //     expect(() => Matrix('a, b, c, d')).not.toThrow();
  //   });

  //   test('it accumlate non terminator characters', () => {
  //     expect(Matrix('123456')).toEqual([123456]);
  //   });

  //   test('it should parse items if there is a space', () => {
  //     expect(Matrix('123 456')).toEqual([123, 456]);
  //   });

  //   test('it should parse items to diffente arrays if there is a new line character', () => {
  //     expect(Matrix('123 456\n789 111')).toEqual([[123, 456], [789, 111]]);
  //   });
  // });
});
