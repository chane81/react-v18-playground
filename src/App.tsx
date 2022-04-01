import './App.css';
import { useLayoutEffect, useState } from 'react';

function App() {
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
    <div className='App'>
      <button onClick={handleClick}>count increase</button>
      <div>
        <h1 style={{ color: flag ? 'blue' : 'black' }}>{count}</h1>
      </div>
      <LogEvents />
    </div>
  );
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

function LogEvents() {
  useLayoutEffect(() => {
    console.log('Commit');
  });
  console.log('Render');
  return null;
}

export default App;
