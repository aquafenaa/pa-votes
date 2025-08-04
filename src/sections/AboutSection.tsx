import React from 'react';
import FormField from '../modules/FormField';

export default function AboutSection() {
  return (
    <FormField title="Applicant Information" required>
      <label className="flex-vert" htmlFor="birth-input">
        Birth Date (mm/dd/yyyy)
        <input className="text-input" id="birth-input" type="date" placeholder="MM/DD/YYYY" required />
      </label>
    </FormField>
  );
}
