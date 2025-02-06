interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string
}

export const persona: Heros = {
    nomen: 'Tony',
    aetas: 45;
    codeNomen: 'Ironman',
}

console.log(persona.nomen);
console.log(persona.aetas);

const {nomen, aetas } = persona;
console.log( aetas )