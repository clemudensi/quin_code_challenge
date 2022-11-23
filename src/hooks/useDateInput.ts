import { ChangeEvent, useState } from 'react';

type LaunchDates = {
    window_start__gte: string;
    window_end__lte: string;
}

export const useUserDateInput = () => {
    const [date, setDate] = useState<LaunchDates>({ window_start__gte: '', window_end__lte: ''});
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setDate({
        ...date,
        [e.target.name]: e.target.value
    });
    return { onChange, date };
}