---
nav:
  path: /hooks
---

# usePrevious

保存上一次状态的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

### 自定义 shouldUpdate 函数

<code src="./demo/demo2.tsx" />

## API

```typescript
const previousState: T = usePrevious<T>(
  state: T,
  shouldUpdate?: (prev: T | undefined, next: T) => boolean
);
```

### Result

| Parameters    | Description     | Type |
| ------------- | --------------- | ---- |
| previousState | 上次 state 的值 | `T`  |

### Params

| Parameters   | Description                | Type                                         | Default Value                |
| ------------ | -------------------------- | -------------------------------------------- | ---------------------------- |
| state        | 需要记录变化的值           | `T`                                          | -                            |
| shouldUpdate | 可选，自定义判断值是否变化 | `(prev: T \| undefined, next: T) => boolean` | `(a, b) => !Object.is(a, b)` |
