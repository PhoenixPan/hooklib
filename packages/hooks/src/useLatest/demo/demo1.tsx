/**
 * title: Description
 * desc: useLatest always return the latest value
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLatest } from 'phoenixpan-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);
  console.log(latestCountRef.current());

  // const latestCountRef = useRef(count);
  // console.log('re', count, latestCountRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
