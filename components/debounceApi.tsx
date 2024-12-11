import { useEffect, useState } from "react";

function useDebouncedApiCall(value: string, delay: number, apiCallback: () => void) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup the timeout on value change
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    useEffect(() => {
        // Call the API when debouncedValue changes
        if (debouncedValue) {
            apiCallback();
        }
    }, [debouncedValue, apiCallback]);
}

export default useDebouncedApiCall;