import React, { ReactNode } from 'react';

interface MultiCheckInputProps {
  otherTitle: string,
  vertical?: boolean,
  children: ReactNode;
}

export default function MultipleRadioInput({ otherTitle, vertical = false, children = null }: MultiCheckInputProps) {
  return (
    <span className={`answers flex-${vertical ? 'vert' : 'horiz'}`}>
      {children}
      <label className="button-label hover" htmlFor={`${otherTitle}-other-option`}>
        <input className="hover" id={`${otherTitle}-other-option`} type="checkbox" />
        {otherTitle}
      </label>
    </span>
  );
}
