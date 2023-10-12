---
nav:
  path: /hooks
---

# useTitle

A hook used to set page title

## Demo

### Description

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

## API

```typescript
useTitle(title: string, options?: Options);
```

### Params

| Parameters | Description | Type     | Default Value |
| ---------- | ----------- | -------- | ------------- |
| title      | Page title  | `string` | -             |

### Options

| Parameters       | Description                                         | Type      | Default Value |
| ---------------- | --------------------------------------------------- | --------- | ------------- |
| restoreOnUnmount | Reset the page title to previous value when unmount | `boolean` | `false`       |
