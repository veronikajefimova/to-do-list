import React, { useState, useEffect } from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import globalize from 'globalize';

const localizer = globalizeLocalizer(globalize)

const events = [
  {
    id: 1,
    title: 'Событие 1',
    start: new Date(2024, 10, 1, 10, 0), // 1 ноября 2024, 10:00
    end: new Date(2024, 10, 1, 12, 0),   // 1 ноября 2024, 12:00
  },
  {
    id: 2,
    title: 'Событие 2',
    start: new Date(2024, 10, 3, 14, 0), // 3 ноября 2024, 14:00
    end: new Date(2024, 10, 3, 15, 30),  // 3 ноября 2024, 15:30
  },
  {
    id: 3,
    title: 'Событие 3',
    start: new Date(2024, 10, 7, 9, 0),  // 7 ноября 2024, 9:00
    end: new Date(2024, 10, 7, 10, 0),   // 7 ноября 2024, 10:00
  },
];

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 1000 }}
    />
  </div>
)

export default MyCalendar;
