import React from "react";
// eslint-disable-next-line
import { Form } from "react-router-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br/>

      <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}/>
      <label htmlFor="phone">Phone:</label>
      <br/>
      <input
      type="tel"
      id="phone"
      value={phone}
      onChange={(e) => {
        setPhone(e.target.value)
      }}
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <label htmlFor="email">Email:</label>
      <br/>
      <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
      }}/>
      <br/>
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
    </>
  );
};

