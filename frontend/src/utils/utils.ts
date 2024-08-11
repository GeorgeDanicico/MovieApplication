export const convertDate = (date: string, includeTime: boolean = true) => {
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        weekday: 'long'
    };

    if (includeTime) {
        options.hour = 'numeric';
        options.minute = 'numeric';
    }

    const formattedDate = d.toLocaleDateString('ro-RO', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export const getTimeFromDate = (date: string) => {
    const d = new Date(date);
    return d.getHours() + ':' + d.getMinutes();
}

export function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
}

export function compareDates(date1: string, date2: string) {
    // Create new date objects to avoid modifying the original dates
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    // Set the time components to zero
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    // Compare the dates
    return d1.getTime() === d2.getTime();
}