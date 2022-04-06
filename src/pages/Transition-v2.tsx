import React, { useState, useCallback, useTransition } from 'react';
import ExpensiveView from '../views/Transition-v2/ExpensiveView';

const TransitionV2 = () => {
  const [value, setValue] = useState(0);
  const [isStartTransition, setIsStartTransition] = useState(false);
  const [renderValue, setRenderValue] = useState(0);

  const [isPending, startTransition] = useTransition();

  const atRangeChange = useCallback(
    (e) => {
      setValue(e.target.value);
      if (isStartTransition) {
        startTransition(() => {
          setRenderValue(e.target.value / 1);
        });
      } else {
        setRenderValue(e.target.value / 1);
      }
    },
    [isStartTransition, startTransition]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='app-content'>
        <label>
          <input
            type='checkbox'
            checked={isStartTransition}
            onChange={(e) => {
              setIsStartTransition(e.target.checked);
            }}
          />
          useTransition
        </label>
        <h3>input:{value}</h3>
        <input
          type='range'
          min='0'
          max='100'
          step='1'
          value={value}
          onChange={atRangeChange}
        />
        <hr />
        {isPending ? ' Loading...' : null}
        <ExpensiveView count={renderValue} />
      </div>
    </div>
  );
};

export default TransitionV2;
