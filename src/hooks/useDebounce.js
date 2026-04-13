import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

/**
 * Returns a debounced version of `value` that only updates
 * after the user stops changing it for `delay` ms.
 */
const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  /* Create a stable debounced setter — recreate only when delay changes */
  const debouncedSetter = useMemo(
    () => debounce((val) => setDebouncedValue(val), delay),
    [delay]
  );

  useEffect(() => {
    debouncedSetter(value);
    return () => debouncedSetter.cancel();
  }, [value, debouncedSetter]);

  return debouncedValue;
};

export default useDebounce;
