---
nav:
  path: /hooks
---

# useLatest

A hook that returns the latest value of the type, help resolve the stale closure issue in custom hooks.

## Demo

### Description

<code src="./demo/demo1.tsx" />

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```
