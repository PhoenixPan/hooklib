---
nav:
  path: /hooks
---

# useSet

管理 Set Type 状态的 Hook。

## Demo

<code src="./demo/demo1.tsx" />

## API

```typescript
const [set, { add, remove, reset }] = useSet<K>(initialValue);
```

### Result

| Parameters | Description          | Type               |
| ---------- | -------------------- | ------------------ |
| set        | Set 对象             | `Set<K>`           |
| add        | 添加元素             | `(key: K) => void` |
| remove     | 移除元素             | `(key: K) => void` |
| reset      | 重置为 Default Value | `() => void`       |

### Params

| Parameters   | Description                       | Type          | Default Value |
| ------------ | --------------------------------- | ------------- | ------------- |
| initialValue | 可选项，传入默认的 Set Parameters | `Iterable<K>` | -             |
