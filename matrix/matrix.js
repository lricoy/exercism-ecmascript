export default (matrixString) => {
  const rows = matrixString.split('\n').map(x => x.split(' ').map(Number));
  const columns = rows.map((row, i) => rows.map(item => item[i]));

  return {
    rows,
    columns,
  };
};
