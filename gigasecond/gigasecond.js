/**
 *
 * @param {Date} date
 */
export default date => {
    const myGigaSecond = new Date(date.getTime() + 10 ** 12);
    return {
        date() {
            return myGigaSecond;
        },
    };
};
