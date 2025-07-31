import React from 'react';

export default function TextBox({ level, lines }: { level: string, lines: string }) {
  return (
    <p className={`${level} text`}>
      {
        lines.split('\\n').map((line) => (
          <div>
            { line }
            <br />
            <br />
          </div>
        ))
      }
    </p>
  );
}
