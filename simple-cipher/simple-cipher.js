const A = 97;
const Z = 122;

export default function Cipher(key = getRandomKey()) {
    if (!isValidKey(key)) {
        throw new Error('Bad key');
    }

    return {
        key,
        encode(str) {
            let encoded = mapToCharCodeAndOffset(
                key,
                str,
                (letterCode, offset) => getCharacter(letterCode + offset),
            );
            return encoded.join('');
        },
        decode(str) {
            let decoded = mapToCharCodeAndOffset(
                key,
                str,
                (letterCode, offset) => getCharacter(letterCode - offset),
            );
            return decoded.join('');
        },
    };
}

function getRandomKey() {
    return Array.from(new Array(100), getRandomLetter).join('');
}

function getRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (Z - A + 1)) + A);
}

function isValidKey(key) {
    if (key.length === 0) {
        return false;
    }

    if (key.split('').some(l => Number.isInteger(l) || l.toUpperCase() === l)) {
        return false;
    }

    return true;
}

function mapToCharCodeAndOffset(key, str, fn) {
    let keyPos = 0;
    let elements = [];

    [...str].forEach(letter => {
        let letterCode = letter.codePointAt();
        let offset = getOffset(key[keyPos]);

        elements.push(fn(letterCode, offset));

        keyPos = keyPos >= key.length - 1 ? 0 : (keyPos += 1);
    });

    return elements;
}

function getOffset(c) {
    return c.codePointAt() - A;
}

function getCharacter(code) {
    if (code > Z) {
        return String.fromCharCode(code - Z - 1 + A);
    } else if (code < A) {
        return String.fromCharCode(code - A + 1 + Z);
    }
    return String.fromCharCode(code);
}
