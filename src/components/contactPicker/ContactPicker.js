import React from "react";

export const ContactPicker = ({contactList, onChange, name, value}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contactList.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
  
};
