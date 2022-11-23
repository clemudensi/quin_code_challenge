import { ChangeEvent, useState } from 'react';

export const userDateInput = () => {
    const [date, setDate] = useState<string|undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    return { onChange, date };
}