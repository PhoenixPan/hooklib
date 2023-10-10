import { useMemo, useState } from 'react';

// switch between:
// 1. true/false
// 2. only one value, defaultValue
// 3. defaultValue left / reverseValue right

export interface Actions<T> {
  toggle: () => void;
  setLeft: () => void;
  setRight: () => void;
  set: (value) => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [boolean, Actions<T>];

function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];

function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    // check whether reverseValue exists
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);

    return { toggle, setLeft, setRight, set };
  }, []);

  return [state, actions];
}

export default useToggle;
