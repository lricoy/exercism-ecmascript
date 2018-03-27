export default (matrixString) => {
  const rows = matrixString.split('\n').map(x => x.split(' ').map(Number));
  const columns = rows.map((row, i) => rows.map(item => item[i]));

  return {
    rows,
    columns,
  };
};

// Same as above but doing everything in a single loop.
// Just as exercise. Prefer the above.
// const isLineBreak = char => char === '\n';
// const isEmpty = char => char === ' ';
// const isAtEnd = (str, i) => str.length === i;

// export default (matrixString) => {
//   const rows = [];
//   const columns = [];
//   let row = [];
//   let lastPos = 0;
//   let i = 0;
//   let c = 0;

//   while (i <= matrixString.length) {
//     const char = matrixString[i];
//     if (isLineBreak(char) || isEmpty(char) || isAtEnd(matrixString, i)) {
//       const elem = parseInt(matrixString.slice(lastPos, i), 10);
//       row.push(elem);

//       if (columns[c]) {
//         columns[c].push(elem);
//       } else {
//         columns[c] = [elem];
//       }
//     }

//     if (isLineBreak(char) || isAtEnd(matrixString, i)) {
//       rows.push(row);
//       row = [];
//       lastPos = i + 1; // To skip the empty space
//       c = 0;
//     } else if (isEmpty(char) || isAtEnd(matrixString, i)) {
//       c += 1;
//       lastPos = i + 1;
//     }
//     i += 1;
//   }

//   return {
//     rows,
//     columns,
//   };
// };
// export default (str) => {
//   const rows = recursiveMagicSplit(str, ' ');
//   return rows;
// };

// // [[1, 2], []]
// // [[]]
// // ['1']
// // [1]
// // [1, '2']
// // [[1,2]]
// // 1 2\n10 20]
// // function recursiveMagicSplit([head, ...tail], accumulator = []) {
// //   const lastElementParsed = parseInt(accumulator[accumulator.length - 1], 10);
// //   if (!head) {
// //     return [
// //       ...accumulator.slice(0, accumulator.length - 1),
// //       lastElementParsed,
// //     ];
// //   }
// //   if (head !== ' ' && head !== '\n') {
// //     return recursiveMagicSplit(tail, [
// //       ...accumulator.slice(0, accumulator.length - 1),
// //       [(accumulator[accumulator.length - 1] || []).concat(head).join('')],
// //     ]);
// //   }

// //   if (head === ' ') {
// //     return recursiveMagicSplit(tail, [
// //       accumulator.slice(0, accumulator.length - 2),
// //       accumulator.slice(0, accumulator.length - 2)[lastElementParsed],
// //     ]);
// //   }

// //   return recursiveMagicSplit(tail,
// //     [
// //       [
// //         ...accumulator.slice(0, accumulator.length - 1),
// //         lastElementParsed,
// //       ],
// //       [],
// //     ]);
// // }

// // if (head === ' ' || head === '\n') {
// //   return split(tail, [
// //     ...accumulator.slice(0, accumulator.length - 1),
// //     parseInt(accumulator[accumulator.length - 1], 10),
// //   ]);
// // }
// // return split(tail, [
// //   ...accumulator.slice(0, accumulator.length - 1),
// //   head,
// // ]);

// function groupBySplitting(list, delim) {
//   return list.reduce((acc, elem) => {
//     if (elem === delim) {
//       return [...acc, []];
//     }
//     return [
//       ...acc.slice(0, acc.length - 1),
//       [...acc[acc.length - 1], elem],
//     ];
//   }, [[]]);
// }

// function recursiveSplit([head, ...tail], delim, acc = [[]]) {
//   if (!head) {
//     return acc;
//   }
//   if (head === delim) {
//     return recursiveSplit(tail, delim, [...acc, []]);
//   }
//   return recursiveSplit(tail, delim, [
//     ...acc.slice(0, acc.length - 1),
//     [...acc[acc.length - 1], head],
//   ]);
// }
