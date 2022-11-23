export const addDaysToDate = (days: number) => {
    const date = new Date(new Date().toISOString());
    date.setDate(date.getDate() + parseInt(String(days)));
    return date.toISOString();
};

export const dateTimeLocal = (date: Date) => {
    const now = date;
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
}