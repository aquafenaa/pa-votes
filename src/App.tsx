/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import FormField from './modules/FormField';
import BinaryInput from './modules/BinaryRadioInput';
import ApplicationReason from './sections/ApplicationReason';

import './App.css';
import AboutSection from './sections/AboutSection';

export default function App() {
  return (
    <div className="document">
      <div className="text">
        <p className="warning">
          <u>Peer Reviewers:</u> This draft is certainly not complete, and you should expect a lot to change. Currently, about half of the website is currently caught up. I meant to add more, however I unfortunately had final to finish at the same time. With that being said, the style will most likely largely stand, so I ask you to critique on that mainly.<br />
          <br />
          Thank you!<br />
          <br />

          <u>Maintenance</u>: This website will undergo scheduled system maintenance on Friday, August 1 from 5 p.m. until 9 p.m. While the website will remain accessible, users may experience brief interruptions or slower load times during this period. We appreciate your understanding.<br />
          <br />
          <u>Deadline Notice</u>: <b>10/20/2025</b> is the last day to register before the 11/04/2025 election.<br />
          <br />
          If you are not a U.S. citizen and a resident of Pennsylvania at least 30 days before the next election, you CANNOT register to vote.<br />
          <br />
          If you have any questions, please call 1-877-VOTESPA (1-877-868-3772)
        </p>
      </div>
      <p className="text">
        Your registration is not complete until processed and accepted by your county voter registration office.<br />
        <br />
        To vote in the next election, you must complete your application by 10/20/2025.<br />
        <br />
        You can submit your application:<br />
        <li>On this website </li>
        <li>Delivered to your county voter registration office.</li>
        <li>By mail to your county voter registration office, received by 10/20/2025.</li>
        Click here to download a blank <a target="./" href="https://www.pa.gov/content/dam/copapwp-pagov/en/vote/resources/documents-and-forms/Voter_Registration_Application_English.pdf">voter registration form.</a>
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
        <a href="https://www.pa.gov/agencies/vote/voter-support/elections-faqs">Frequently Asked Questions (FAQ)</a>
      </p>
      <div className="break" />

      <FormField title="Applicant Name" required>
        <label className="flex-vert" htmlFor="firstName">
          First Name
          <input
            className="text-input"
            id="firstName"
            placeholder="First Name"
            maxLength={30}
            type="text"
            required
          />
        </label>
        <label className="flex-vert" htmlFor="middleName">
          Middle Name or Initial
          <input
            className="text-input"
            id="middleName"
            placeholder="Middle Name or Initial"
            maxLength={30}
            type="text"
          />
        </label>
        <label className="flex-vert" htmlFor="lastName">
          Last Name
          <input
            className="text-input"
            id="lastName"
            placeholder="Last Name"
            maxLength={30}
            type="text"
            required
          />
        </label>
        <label className="flex-vert" htmlFor="suffix">
          Suffix
          <select style={{ height: '36px' }} className="text-input" id="suffix">
            <option value="none">-</option>
            <option value="Jr">Jr.</option>
            <option value="Sr">Sr.</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
          </select>
        </label>
      </FormField>
      <FormField title="Eligibility" required>
        <p>
          If you answer &quot;No&quot; to either question, you cannot register to vote.<br />
          <br />
          To register to vote, you must:<br />
          <li>Be a <u>United States citizen</u> at least 30 days before the next election</li>
          <li>Be a <u>resident of Pennsylvania</u> and your election district for at least 30 days before the next election</li>
          <li>Be at least <u>18 years of age</u> on the day of the next election</li>
        </p>
        <BinaryInput title="Are you a citizen of the U.S.?" />
        <BinaryInput title="Will you be 18 years or older on or before election day?" />
      </FormField>
      <ApplicationReason />
      <AboutSection />
    </div>
  );
}
