import React, { ReactNode } from 'react';

interface MultiCheckInputProps {
  otherTitle: string,
  children: ReactNode;
}

export default function MultipleRadioInput({ otherTitle, children = null }: MultiCheckInputProps) {
  return (
    <span className="answers flex-vert">
      {children}
      <label className="button-label hover" htmlFor={`${otherTitle}-other-option`}>
        <input className="hover" id={`${otherTitle}-other-option`} type="checkbox" />
        {otherTitle}
      </label>
    </span>
  );
}
