import React, { useState } from "react";

export function BookingForm (){
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');
    const [occasion, setOccasion] = useState('');
    const availableTimes = [];

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }
    return(
        <div className="reservation">
        <form onSubmit={handleSubmit}>
            <fieldset className="field-reservation">
            <div className='form-reservation'>
              <label htmlFor="res-name" className="label-reservation">Your name</label>
              <input type="name"
                     id="res-name"
                     className="input-reservation"
                     minLength={2}
                     value={name}
                     onChange={(e)=>setName(e.target.value)}/>
             </div>
             <div className='form-reservation'>
              <label htmlFor="res-date" className="label-reservation">Choose date</label>
              <input type="date"
                     id="res-date"
                     className="input-reservation"
                     required
                     value={date}
                     onChange={(e)=>setDate(e.target.value)}/>
             </div>
             <div className='form-reservation'>
              <label htmlFor="res-time" className="label-reservation">Choose time</label>
              <select id="res-time"
                      className="input-reservation"
                      value={time}
                      onChange={(e)=>setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
              </div>
              <div className='form-reservation'>
                <label htmlFor="guests" className="label-reservation">Number of guests</label>
                <input type="number"
                       placeholder="1"
                       min="1"
                       max="10"
                       id="guests"
                       className="input-reservation"
                       value={number}
                       onChange={(e)=>setNumber(e.target.value)}/>
              </div>
              <div className='form-reservation'>
                <label htmlFor="occasion" className="label-reservation">Occasion</label>
                <select id="occasion"
                        className="input-reservation"
                        value={occasion}
                        onChange={(e)=>setOccasion(e.target.value)}>
                 <option>Birthday</option>
                 <option>Anniversary</option>
                </select>
              </div>
              <input type="submit" value="Make Your reservation" className="button" disabled={!name}/>
            </fieldset>
         </form>
   </div>
    )
}