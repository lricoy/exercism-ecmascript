export default () => {
    const dnaToRna = new Map([['C', 'G'], ['G', 'C'], ['A', 'U'], ['T', 'A']]);
    const mapStrand = strand => {
        if (dnaToRna.has(strand)) {
            return dnaToRna.get(strand);
        }
        throw new Error('Invalid input DNA.');
    };
    return {
        toRna(dna) {
            const strands = dna.split('');
            return strands.map(mapStrand).join('');
        },
    };
};
