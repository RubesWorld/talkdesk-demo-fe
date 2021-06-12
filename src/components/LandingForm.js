import React, { useState } from "react";

const initialForm = {
  talkdesk_phone_number: "+14155786136",
  contact_phone_number: "",
  context: {
    fields: [
      {
        data_type: "text",
        display_name: "Customer Name",
        name: "customer_name",
        tooltip_text: "The name of the customer, as submitted in our website",
        value: "",
      },
      {
        data_type: "url",
        display_name: "Current page",
        name: "current_page",
        tooltip_text: "The last visited page of the customer on our website",
        value: "https://example.com/kb",
      },
    ],
  },
};

function LandingForm() {
  const [formDetails, setFormDetails] = useState(initialForm);

  const handleChange = (e) => {
    //* only the first value for name and contact phone number need to be updated here.
    const { value, contact_phone_number } = e.target;
  };

  const onSubmit = () => {};

  return (
    <div className="form-container">
      <h3>Answer a few questions and our team will contact you right away.*</h3>
      <p>*Guaranteed within 05 minutes.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input className="form-input" name="value"></input>
        <label htmlFor="number" className="form-label">
          Phone Number
        </label>
        <input className="form-input"></input>
        <button>Submit Request</button>
      </form>
    </div>
  );
}

export default LandingForm;
