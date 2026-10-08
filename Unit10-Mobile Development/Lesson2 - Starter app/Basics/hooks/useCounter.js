import { useState } from 'react';

export default function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => (prev < 10 ? prev +1 : prev));
    const decrement = () => setCount(prev => (prev > 0 ? prev -1 : prev));

    return [count, increment, decrement];
}