import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title:</label>
      <input
      id="name"
      type="text"
      value={name}
      onChange={(e)=>{setName(e.target.value)}}
      />
      <label htmlFor="date">Date:</label>
      <input
      id="date"
      type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      min={getTodayString}
      />
      <label htmlFor="time">Time:</label>
      <input
      id="time"
      type="time"
      value={time}
      onChange={(e)=> setTime(e.target.value)}
      />
      <label>Contact List:</label>
      <ContactPicker 
      contactList = {contacts}
      onChange={(e)=>setContact(e.target.value)}
      />
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
    </>
  );
};
