const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');

export default function Pangram(phrase) {
    const phraseSet = new Set(phrase.toLowerCase());
    return {
        isPangram() {
            if (phraseSet.size === 0) return false;
            return isSuperSet(phraseSet, alphabet);
        },
    };
}

function isSuperSet(set, subset) {
    for (let element of subset) {
        if (!set.has(element)) {
            return false;
        }
    }
    return true;
}
