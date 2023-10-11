---
nav:
  path: /hooks
---

# useBoolean

Hook used to manage boolean state

## Demo

### Basic usage

<code src="./demo/demo1.tsx" />

## API

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

### Params

| Parameters   | Description                 | Type      | Default Value |
| ------------ | --------------------------- | --------- | ------------- |
| defaultValue | Optional, the default value | `boolean` | `false`       |

### Result

| Parameters | Description      | Type      |
| ---------- | ---------------- | --------- |
| state      | current value    | `boolean` |
| actions    | action functions | `Actions` |

### Actions

| Parameters | Description  | Type                       |
| ---------- | ------------ | -------------------------- |
| toggle     | toggle state | `() => void`               |
| set        | set state    | `(value: boolean) => void` |
| setTrue    | set to true  | `() => void`               |
| setFalse   | set to false | `() => void`               |
