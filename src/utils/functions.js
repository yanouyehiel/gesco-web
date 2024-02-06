import { getItem, removeItem } from "../services/LocalStorage";
import { toast } from "react-toastify";

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

export function getTimeElapsed(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const timeElapsed = now - date;
  
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
  
    //const milliseconds = Math.floor(timeElapsed % millisecondsPerSecond);
    //const seconds = Math.floor((timeElapsed / millisecondsPerSecond) % secondsPerMinute);
    const minutes = Math.floor((timeElapsed / (millisecondsPerSecond * secondsPerMinute)) % minutesPerHour);
    const hours = Math.floor((timeElapsed / (millisecondsPerSecond * secondsPerMinute * minutesPerHour)) % hoursPerDay);
    const days = Math.floor(timeElapsed / (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay));
  
    return `${days}jour ${hours}h ${minutes}min`
}

export function verifyUser({ isAuthenticated, setIsAuthenticated }) {
    const user = JSON.parse(getItem('gescoUser') || '{}')
    
    if (!isAuthenticated) {
        window.location.replace('/login')
    } else {
        if (user.bloque === 1) {
            toast.error('Veuillez vous acquiter de votre paiement mensuel')
            setTimeout(() => {
                removeItem('gescoUser')
                setIsAuthenticated(false)
                window.location.replace('/login')
            }, 8000)
        }      
    }
}