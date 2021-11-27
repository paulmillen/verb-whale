import { writable } from 'svelte/store';
import {tenses, dictionary as completeDictionary} from "./verbs";

export const verbTable = writable({});
export const availableVerbs = writable([]);
export const availableTenses = writable([]);

export const storeAndReturnVerbData = async (
  requestedVerbs = ['être', 'avoir']
) => {
  return new Promise(resolve => {
    const allVerbs = Object.keys(completeDictionary)

    if ('*' in requestedVerbs) {
      verbTable.set(completeDictionary);
      availableVerbs.set(allVerbs);
      availableTenses.set(tenses);

      return resolve({
        verbs: completeDictionary,
        availableTenses: tenses,
        availableVerbs: allVerbs
      })
    }

    const dictionaryFromRequested = requestedVerbs.reduce((acc, verb) => {
      const possibleVerbs = completeDictionary[verb]

      if (!possibleVerbs) {
        return acc
      }

      return {...acc, [verb]: completeDictionary[verb]}
    }, {})

    verbTable.set(dictionaryFromRequested);
    availableVerbs.set(allVerbs);
    availableTenses.set(tenses);

    return resolve({
      verbs: dictionaryFromRequested,
      availableTenses: tenses,
      availableVerbs: allVerbs
    })
  })
};
