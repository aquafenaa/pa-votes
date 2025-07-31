/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="document">
      <div className="text">
        <p className="warning">
          This website will undergo scheduled system maintenance on Friday, August 1 from 5 p.m. until 9 p.m. While the website will remain accessible, users may experience brief interruptions or slower load times during this period. We appreciate your understanding.<br />
          <br />
          <u>Deadline Alert</u>: <b>10/20/2025</b> is the last day to register before the 11/04/2025 election.<br />
          <br />
          If you are not a U.S. citizen and a resident of Pennsylvania at least 30 days before the next election, you CANNOT register to vote.<br />
          <br />
          If you have any questions, please call 1-877-VOTESPA (1-877-868-3772)
        </p>
      </div>
      <p className="text">
        Your registration is not complete until processed and accepted by your county voter registration office.<br />
        <br />
        To vote in the next election, you must complete your application by 10/20/2025. You can submit your application:<br />
        <br />
        <li>On this web site </li>
        <li>Delivered to your county voter registration office.</li>
        <li>By mail to your county voter registration office, received by 10/20/2025.</li>
        Click here to download a <a target="./" href="https://www.pa.gov/content/dam/copapwp-pagov/en/vote/resources/documents-and-forms/Voter_Registration_Application_English.pdf">blank voter registration form</a>
        <li>
          If you are on active duty in the military, or you are a hospitalized or bedridden veteran, you can register at any time.
          See <a href="https://www.fvap.gov">www.fvap.gov</a> for more information.<br />
        </li>
        <br />
        If you have one, please have your PA driver&lsquo;s license or PennDOT ID available to reference as you complete the application.<br />
        <br />
        Also, please know any section or field that&lsquo;s marked with a red indicator or an asterisk (*) is required to be filled out in order to submit an application.<br />
        <br />
        <b>Please avoid the use of &quot;Autofill&quot; features when completing your application.</b><br />
        <br />
        <a href="https://www.pa.gov/agencies/vote/voter-support/elections-faqs#googtrans(en)">Frequently Asked Questions (FAQ)</a>
      </p>
    </div>
  );
}

export default App;
