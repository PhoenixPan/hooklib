---
nav:
  path: /hooks
---

# useUnmountedRef

获取当前组件是否已经卸载的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const unmountRef: { current: boolean } = useUnmountedRef();
```

### Result

| Parameters | Description      | Type                   |
| ---------- | ---------------- | ---------------------- |
| unmountRef | 组件是否已经卸载 | `{ current: boolean }` |
