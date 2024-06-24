import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [name, setName] = useState('');
 const [contact, setContact] = useState('');
 const[date, setDate] = useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setContact('');
    setName('');
    setDate('');
    setTime('');
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        name = {name}
        date = {date}
        time={time}
        contacts={contacts}
        contact={contact}
        handleSubmit = {handleSubmit} 
        setContact={setContact}
        setDate={setDate}
        setTime={setTime}
        setName={setName}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileList= {appointments}/>
      </section>
    </div>
  );
};