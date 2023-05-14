import  { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css'

function MyApp() {
    const [date, setDate] = useState(new Date());
    const [open,setopen] =useState(false)
    const handleOpenModal = () => {
        setopen(true);
      };
    
      const handleCloseModal = () => {
        setopen(false);
      };

    return (
      <div className='app'>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} onClickDay={handleOpenModal}/>
        </div>
        {open && (
        <div className="modal-background" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
          {date.toDateString()}
          </div>
        </div>
      )}
      </div>
    );
  }


export default MyApp


