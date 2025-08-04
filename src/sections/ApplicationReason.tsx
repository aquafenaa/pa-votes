import React from 'react';

import FormField from '../modules/FormField';
import MultipleRadioInput from '../modules/MultiCheckInput';

export default function ApplicationReason() {
  return (
    <FormField title="Application Reason" required>
      <p>If you are currently registered to vote, you do not have to use this application unless you have moved or changed your name.</p>
      <MultipleRadioInput otherTitle="New Registration">
        <label className="button-label hover" htmlFor="change-name">
          <input id="change-name" className="hover" type="checkbox" />
          Change of Name
        </label>
        <label className="button-label hover" htmlFor="change-address">
          <input id="change-address" type="checkbox" />
          Change of Address
        </label>
        <label className="button-label hover" htmlFor="change-party">
          <input id="change-party" className="hover" type="checkbox" />
          Change of Party
        </label>
        <label className="button-label hover" htmlFor="employee">
          <input id="employee" className="hover" type="checkbox" />
          Federal or State employee registering in previous county
        </label>
      </MultipleRadioInput>
    </FormField>
  );
}
