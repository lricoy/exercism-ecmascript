export default size => {
  let rows = triangle(size);

  return {
    rows,
    lastRow: rows[rows.length - 1]
  };
};

function triangle(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }
  const previousTriangle = triangle(n - 1);
  const lastRow = previousTriangle[previousTriangle.length - 1];
  const row = Array.from(Array(n), (elem, i) => {
    if (i === 0 || i === n - 1) {
      return 1;
    }
    return lastRow[i - 1] + lastRow[i];
  });
  return [...previousTriangle, row];
}
