import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value); // this doesn't rerun on rerender, so value is always the initial value
  ref.current = value;

  return ref;
}

export default useLatest;
