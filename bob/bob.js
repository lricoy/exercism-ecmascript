/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
    hey(message) {
        if (isNothing(message)) {
            return 'Fine. Be that way!';
        }
        if (isAQuestion(message) && isAYell(message)) {
            return `Calm down, I know what I'm doing!`;
        }
        if (isAQuestion(message)) {
            return 'Sure.';
        }
        if (isAYell(message)) {
            return 'Whoa, chill out!';
        }

        return 'Whatever.';
    }
}

function isAQuestion(msg) {
    return msg.endsWith('?');
}

function isAYell(message) {
    console.log(message, message.toUpperCase(), message.toLowerCase);
    return (
        message === message.toUpperCase() && message !== message.toLowerCase()
    );
}

function isNothing(msg) {
    return msg.trim().length === 0;
}

export default Bob;
