export interface License {
    name: string;
    url?: string;
}

export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
}

export interface Phonetics {
    text: string;
    audio: string;
    sourceUrl: string;
    license: License;
    word:string
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface WordDetails {
    license: License;
    meanings: Meaning[];
    phonetics: Phonetics[];
    sourceUrls: string[];
    word: string;
}
export interface MeaningsProps {
    meanings: Meaning[];
}
