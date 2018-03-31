export default size => {
  let rows = [];
  if (size === 1) {
    rows = [[1]];
  } else if (size === 2) {
    rows = [[1], [1, 1]];
  } else {
    rows = [[1], [1, 1]];
    for (let i = 1; i < size; i++) {
      rows[i] = [1];
      for (let j = 1; j <= i - 1; j++) {
        rows[i].push(rows[i - 1][j - 1] + rows[i - 1][j]);
      }
      rows[i].push(1);
    }
  }
  return {
    rows,
    lastRow: rows[rows.length - 1]
  };
};
