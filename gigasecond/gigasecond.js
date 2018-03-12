/**
 *
 * @param {Date} date
 */
export default function Gigasecond(date) {
    let myGigaSecond = new Date(date);
    myGigaSecond.setUTCSeconds(date.getSeconds() + 1000000000);
    return {
        date() {
            return myGigaSecond;
        },
    };
}
