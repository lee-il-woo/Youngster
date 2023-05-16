import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function MyApp() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dummy, setDummy] = useState([
    { date: '2023-05-14', content: '대충' },
    { date: '2023-05-20', content: '프로젝트끝내기' },
    { date: '2023-05-23', content: '복지데이터받아오기' },
  ]);
  const [currentEvent, setCurrentEvent] = useState({ date: '', content: '' });

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentEvent({ date: '', content: '' });
    setOpen(false);
  };

  const handleAddOrUpdateEvent = () => {
    const index = dummy.findIndex((event) => event.date === currentEvent.date);
    if (index === -1) {
      setDummy([...dummy, currentEvent]);
    } else {
      const updatedDummy = [...dummy];
      updatedDummy[index] = currentEvent;
      setDummy(updatedDummy);
    }
    handleCloseModal();
  };

  const handleDeleteEvent = () => {
    const updatedDummy = dummy.filter((event) => event.date !== currentEvent.date);
    setDummy(updatedDummy);
    handleCloseModal();
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const currentDate = date.toISOString().slice(0, 10);
      const event = dummy.find((event) => event.date === currentDate);
      if (event) {
        return <p className='event'>{event.content}</p>;
      }
    }
  };

  const handleClickDay = (value) => {
    const selectedDate = value.toISOString().slice(0, 10);
    const event = dummy.find((event) => event.date === selectedDate);
    setCurrentEvent({ date: selectedDate, content: event ? event.content : '' });
    handleOpenModal();
  };

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} tileContent={tileContent} onClickDay={handleClickDay} />
      </div>
      {open && (
        <div className='modal-background' onClick={handleCloseModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <h3>{currentEvent.date}</h3>
            <input
              type='text'
              placeholder='Add event...'
              value={currentEvent.content}
              onChange={(e) => setCurrentEvent({ ...currentEvent, content: e.target.value })}
            />
            <div className='modal-buttons'>
              <button onClick={handleDeleteEvent}>Delete</button>
              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={handleAddOrUpdateEvent}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApp;