//import AxiosApi from "../services/AxiosApi";

export function dateParser(date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

    return newDate;
}

export function longueurTexte(word) {
    // eslint-disable-next-line no-new-wrappers
    let sentence = new String(word)
    if (sentence.length > 15) {
        return sentence.substring(0, 16) + '...'
    } else {
        return sentence
    }
}