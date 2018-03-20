export default arr => ({
  toDecimal: () =>
    isInvalid(arr) ? 0 : recursiveToDecimal(arr, arr.length - 1)
});

const isInvalid = ([head, ...tail]) =>
  !head
    ? false
    : isNaN(head) || (head !== "1" && head !== "0") || isInvalid(tail);

const recursiveToDecimal = ([head, ...tail], power) =>
  tail.length === 0
    ? binToDec(head, power)
    : binToDec(head, power) + recursiveToDecimal(tail, power - 1);

const binToDec = (n, power) => parseInt(n) * 2 ** power;
