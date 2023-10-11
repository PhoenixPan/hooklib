---
nav:
  path: /hooks
---

# useResetState

提供重置 state 方法的 Hooks，用法与 `React.useState` 基本一致。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const [state, setState, resetState] = useResetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, () => void]
```
