import { useMemo } from 'react';
import useToggle from '../useToggle';

type Fn = () => void;
export interface Actions {
  setTrue: Fn;
  setFalse: Fn;
  set: (value: boolean) => void;
  toggle: Fn;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      toggle,
      set: (value) => set(!!value),
      setTrue,
      setFalse,
    };
  }, []);

  return [state, actions];
}
