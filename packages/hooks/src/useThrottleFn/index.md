---
nav:
  path: /hooks
---

# useThrottleFn

用来处理函数节流的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  run,
  cancel,
  flush
} = useThrottleFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

### Params

| Parameters | Description    | Type                      | Default Value |
| ---------- | -------------- | ------------------------- | ------------- |
| fn         | 需要节流的函数 | `(...args: any[]) => any` | -             |
| options    | 配置节流的行为 | `Options`                 | -             |

### Options

| Parameters | Description              | Type      | Default Value |
| ---------- | ------------------------ | --------- | ------------- |
| wait       | 等待时间，单位为毫秒     | `number`  | `1000`        |
| leading    | 是否在延迟开始前调用函数 | `boolean` | `true`        |
| trailing   | 是否在延迟开始后调用函数 | `boolean` | `true`        |

### Result

| Parameters | Description                                | Type                      |
| ---------- | ------------------------------------------ | ------------------------- |
| run        | 触发执行 fn，函数 Parameters 将会传递给 fn | `(...args: any[]) => any` |
| cancel     | 取消当前节流                               | `() => void`              |
| flush      | 当前节流立即调用                           | `() => void`              |
