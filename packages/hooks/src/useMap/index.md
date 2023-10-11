---
nav:
  path: /hooks
---

# useMap

管理 Map Type 状态的 Hook。

## Demo

<code src="./demo/demo1.tsx" />

## API

```typescript
const [map, { set, setAll, remove, reset, get }] = useMap<K, V>(initialValue);
```

### Result

| Parameters | Description           | Type                                 |
| ---------- | --------------------- | ------------------------------------ |
| map        | Map 对象              | `Map<K, V>`                          |
| set        | 添加元素              | `(key: K, value: V) => void`         |
| get        | 获取元素              | `(key: K) => V \| undefined`         |
| setAll     | 生成一个新的 Map 对象 | `(newMap: Iterable<[K, V]>) => void` |
| remove     | 移除元素              | `(key: K) => void`                   |
| reset      | 重置为 Default Value  | `() => void`                         |

### Params

| Parameters   | Description                       | Type               | Default Value |
| ------------ | --------------------------------- | ------------------ | ------------- |
| initialValue | 可选项，传入默认的 Map Parameters | `Iterable<[K, V]>` | -             |
