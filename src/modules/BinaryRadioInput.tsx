import React, { useState } from 'react';

export default function BinaryInput({ title }: { title: string }) {
  const [value, setValue] = useState(0);

  const clickYes = () => {
    setValue(1);
  };
  const clickNo = () => {
    setValue(2);
  };

  return (
    <span className="question flex-vert">
      <b>{title}</b>
      <div style={{ maxWidth: '200px' }} className="answers">
        <label htmlFor={`${title}-yes`}>
          <input
            id={`${title}-yes`}
            type="radio"
            checked={value === 1}
            onChange={clickYes}
          />
          Yes
        </label>
        <label htmlFor={`${title}-no`}>
          <input
            id={`${title}-no`}
            type="radio"
            checked={value === 2}
            onChange={clickNo}
          />
          No
        </label>
      </div>
    </span>
  );
}
