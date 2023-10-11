---
nav:
  path: /hooks
---

# useUnmount

在组件卸载（unmount）时执行的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
useUnmount(fn: () => void);
```

### Parameters

| Parameters | Description          | Type         | Default Value |
| ---------- | -------------------- | ------------ | ------------- |
| fn         | 组件卸载时执行的函数 | `() => void` | -             |
