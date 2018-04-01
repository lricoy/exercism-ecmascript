import Triangle from './pascals-triangle';
import { zip } from './pascals-triangle';
describe('Triangle', () => {
  test('with one row', () => {
    expect(new Triangle(1).rows).toEqual([[1]]);
  });

  test('with two rows', () => {
    expect(new Triangle(2).rows).toEqual([[1], [1, 1]]);
  });

  test('with three rows', () => {
    expect(new Triangle(3).rows).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  test('last row', () => {
    expect(new Triangle(4).lastRow).toEqual([1, 3, 3, 1]);
  });

  test('fifth row', () => {
    expect(new Triangle(5).lastRow).toEqual([1, 4, 6, 4, 1]);
  });

  test('twentieth row', () => {
    const twentieth = [1, 19, 171, 969, 3876, 11628, 27132, 50388, 75582, 92378, 92378, 75582, 50388, 27132, 11628, 3876, 969, 171, 19, 1];
    expect(new Triangle(20).lastRow).toEqual(twentieth);
  });
});

describe('zip', () => {
  test('it should return a empty array if no arguments provided', () => {
    expect(zip()).toEqual([]);
  });
  test('it should work when given only one array', () => {
    expect(zip([1,2,3])).toEqual([[1], [2], [3]]);
  });
  test('it should work with two arrays', () => {
    expect(zip([1,2,3], [4,5,6])).toEqual([[1,4], [2,5], [3,6]]);
  });
  test('it should work with two arrays of one and zero', () => {
    expect(zip([0, 1], [1, 0])).toEqual([[0, 1], [1, 0]]);
  });
})
