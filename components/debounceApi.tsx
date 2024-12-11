import { useEffect, useState } from "react";

function useDebouncedApiCall(value: string, delay: number, apiCallback: () => void) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    useEffect(() => {
        if (debouncedValue) {
            apiCallback();
        }
    }, [debouncedValue, apiCallback]);
}

export default useDebouncedApiCall;