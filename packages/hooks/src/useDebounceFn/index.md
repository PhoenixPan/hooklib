---
nav:
  path: /hooks
---

# useDebounceFn

用来处理防抖函数的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  run,
  cancel,
  flush
} = useDebounceFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

### Params

| Parameters | Description        | Type                      | Default Value |
| ---------- | ------------------ | ------------------------- | ------------- |
| fn         | 需要防抖执行的函数 | `(...args: any[]) => any` | -             |
| options    | 配置防抖的行为     | `Options`                 | -             |

### Options

| Parameters | Description              | Type      | Default Value |
| ---------- | ------------------------ | --------- | ------------- |
| wait       | 等待时间，单位为毫秒     | `number`  | `1000`        |
| leading    | 是否在延迟开始前调用函数 | `boolean` | `false`       |
| trailing   | 是否在延迟开始后调用函数 | `boolean` | `true`        |
| maxWait    | 最大等待时间，单位为毫秒 | `number`  | -             |

### Result

| Parameters | Description                                | Type                      |
| ---------- | ------------------------------------------ | ------------------------- |
| run        | 触发执行 fn，函数 Parameters 将会传递给 fn | `(...args: any[]) => any` |
| cancel     | 取消当前防抖                               | `() => void`              |
| flush      | 立即调用当前防抖函数                       | `() => void`              |
