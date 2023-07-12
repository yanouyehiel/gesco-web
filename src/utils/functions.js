export function dateParser(date) {
    let newDate = new Date(date).toLocaleTimeString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })

    return newDate;
}