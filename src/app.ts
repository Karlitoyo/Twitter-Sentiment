// @ts-ignore
import aposToLexForm from "apos-to-lex-form";
import { WordTokenizer } from "natural";
// @ts-ignore
import SpellCorrector from 'spelling-corrector';
const { removeStopwords, eng } = require('stopword')

const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

function getSentiment(str: string): -1 | 0 | 1 {
    if (!str.trim()) {
        return 0;
    }

    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");

    const tokenized = tokenizer.tokenize(lexed);

    const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));

    const stopWordsRemoved = removeStopwords(fixedSpelling);

    console.log(stopWordsRemoved);

    return 0;

}

console.log(getSentiment('This is awesome!'))
console.log(getSentiment('I have a large dog with many different colours on its coat!'))
