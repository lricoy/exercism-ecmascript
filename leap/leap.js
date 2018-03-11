const divisible = divisor => dividend => divisor % dividend === 0;

export default year => {
    const isDivBy = divisible(year);
    const isLeapYear = (isDivBy(4) && !isDivBy(100)) || isDivBy(400);
    return {
        isLeap() {
            return isLeapYear;
        },
    };
};
