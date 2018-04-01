export default size => {
  let rows = triangle(size);

  return {
    rows,
    lastRow: rows[rows.length - 1]
  };
};

function triangle(n, previousTriangle = [[1]]) {
  if (n === 1) {
    return previousTriangle;
  }
  const lastRow = previousTriangle[previousTriangle.length - 1];
  const row = zip([0, ...lastRow], [...lastRow, 0]).map(elem =>
    elem.reduce((a, b) => a + b, 0)
  );
  return triangle(n - 1, [...previousTriangle, row]);
}

export function zip(...lists) {
  if (lists.length === 0) {
    return [];
  }
  if (lists.length === 1) {
    return zipTwo(lists[0], []);
  }
  return lists.reduce((zipper, list) => zipTwo(zipper, list));
}

function zipTwo(a = [], b = []) {
  return a.reduce((acc, e, i) => {
    return [...acc, b[i] !== undefined ? [e, b[i]] : [e]];
  }, []);
}
