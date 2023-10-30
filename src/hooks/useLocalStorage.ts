import { useEffect, useState } from 'react';

const PREFIX = 'ms-playground';
export function useLocalStorage(key: string, intialValue: any) {
    const prefixedkey = `${PREFIX}${key}`;

    const[value, setValue] = useState(() => {
      if (typeof window !== 'undefined') {
        const jsonValue = localStorage.getItem(prefixedkey);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof intialValue === 'function') {
          return intialValue();
        } else {
          return intialValue;
        }
      }
    });

    useEffect(() => {
      localStorage.setItem(prefixedkey, JSON.stringify(value));
    }, [prefixedkey, value]);

    return [value, setValue];
}