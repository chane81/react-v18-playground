import { useLayoutEffect, useState } from 'react';

const AutoBatching = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = async () => {
    console.log('=== click ===');

    // React 18 WITHOUT createRoot does not batches these:
    await fetchSomething();
    setCount((c) => c + 1); // Causes a re-render
    setFlag((f) => !f); // Causes a re-render
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <button style={{ maxWidth: '10rem' }} onClick={handleClick}>
        count increase
      </button>
      <div>
        <h1 style={{ color: flag ? 'blue' : 'black' }}>{count}</h1>
      </div>
      <LogEvents />
    </div>
  );
};

const fetchSomething = () => {
  return new Promise((resolve) => setTimeout(resolve, 100));
};

const LogEvents = () => {
  useLayoutEffect(() => {
    console.log('Commit');
  });
  console.log('Render');
  return null;
};

export default AutoBatching;
