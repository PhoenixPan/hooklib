---
nav:
  path: /hooks
---

# useToggle

Hook used to switch between two states.

## Demo

### Basic usage

<!-- dumi feature -->
<code src="./demo/demo1.tsx" />

### Advanced usage

<code src="./demo/demo2.tsx" />

## API

```typescript
const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
```

### Params

| Parameter    | Description                 | Type | Default Value |
| ------------ | --------------------------- | ---- | ------------- |
| defaultValue | Optional, the default value | `T`  | `false`       |
| reverseValue | Optional, the reverse value | `U`  | -             |

### Result

| Parameter | Description      | Type      |
| --------- | ---------------- | --------- |
| state     | current value    | -         |
| actions   | action functions | `Actions` |

### Actions

| Parameter | Description                                               | Type                      |
| --------- | --------------------------------------------------------- | ------------------------- |
| toggle    | toggle state                                              | `() => void`              |
| set       | update state                                              | `(state: T \| U) => void` |
| setLeft   | set to defaultValue                                       | `() => void`              |
| setRight  | set to reverseValue if available, otherwise !defaultValue | `() => void`              |
