import React, { ReactNode } from 'react';

import '../App.css';

interface FormFieldProps {
  title: string;
  required?: boolean;
  children: ReactNode;
}

function FormField({ title, required = false, children = null }: FormFieldProps) {
  return (
    <form className="form-field">
      <h3 className="header">
        {title}
        { required ? '*' : '' }
      </h3>
      {children}
    </form>
  );
}

export default FormField;
