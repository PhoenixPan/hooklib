---
nav:
  path: /hooks
---

# useThrottle

用来处理节流值的 Hook。

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const throttledValue = useThrottle(
  value: any,
  options?: Options
);
```

### Params

| Parameters | Description    | Type      | Default Value |
| ---------- | -------------- | --------- | ------------- |
| value      | 需要节流的值   | `any`     | -             |
| options    | 配置节流的行为 | `Options` | -             |

### Options

| Parameters | Description              | Type      | Default Value |
| ---------- | ------------------------ | --------- | ------------- |
| wait       | 等待时间，单位为毫秒     | `number`  | `1000`        |
| leading    | 是否在延迟开始前调用函数 | `boolean` | `true`        |
| trailing   | 是否在延迟开始后调用函数 | `boolean` | `true`        |
