import { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import './OpeningHours.css';

const OpeningHours = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const schedule = [
    { day: 0, name: 'Sunday', open: '12:00', close: '21:00' },
    { day: 1, name: 'Monday', open: null, close: null }, // Closed
    { day: 2, name: 'Tuesday', open: '18:00', close: '22:30' },
    { day: 3, name: 'Wednesday', open: '18:00', close: '22:30' },
    { day: 4, name: 'Thursday', open: '18:00', close: '22:30' },
    { day: 5, name: 'Friday', open: '17:30', close: '23:30' },
    { day: 6, name: 'Saturday', open: '17:30', close: '23:30' },
  ];

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Check if restaurant is open
  useEffect(() => {
    const checkStatus = () => {
      const now = currentTime;
      const currentDay = now.getDay();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeStr = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

      const todaySchedule = schedule.find(s => s.day === currentDay);

      if (!todaySchedule || !todaySchedule.open) {
        setIsOpen(false);
        const nextOpenDay = getNextOpenDay(currentDay);
        setStatusMessage(`Closed today · Opens ${nextOpenDay}`);
        return;
      }

      const openTime = todaySchedule.open;
      const closeTime = todaySchedule.close;

      if (currentTimeStr >= openTime && currentTimeStr < closeTime) {
        setIsOpen(true);
        const closingTimeFormatted = formatTime(closeTime);
        setStatusMessage(`Open now · Closes at ${closingTimeFormatted}`);
      } else if (currentTimeStr < openTime) {
        setIsOpen(false);
        const openingTimeFormatted = formatTime(openTime);
        setStatusMessage(`Closed · Opens at ${openingTimeFormatted}`);
      } else {
        setIsOpen(false);
        const nextOpenDay = getNextOpenDay(currentDay);
        setStatusMessage(`Closed · Opens ${nextOpenDay}`);
      }
    };

    checkStatus();
  }, [currentTime]);

  const getNextOpenDay = (currentDay) => {
    let nextDay = (currentDay + 1) % 7;
    let daysChecked = 0;

    while (daysChecked < 7) {
      const daySchedule = schedule.find(s => s.day === nextDay);
      if (daySchedule && daySchedule.open) {
        if (nextDay === (currentDay + 1) % 7) {
          return `tomorrow at ${formatTime(daySchedule.open)}`;
        }
        return `${daySchedule.name} at ${formatTime(daySchedule.open)}`;
      }
      nextDay = (nextDay + 1) % 7;
      daysChecked++;
    }
    return 'soon';
  };

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const formatScheduleTime = (time) => {
    if (!time) return 'Closed';
    return formatTime(time);
  };

  const isToday = (day) => {
    return day === currentTime.getDay();
  };

  return (
    <section className="opening-hours" id="hours">
      <div className="container">
        <div className="opening-hours__header">
          <span className="section-eyebrow">Schedule</span>
          <h2 className="section-title">Opening Hours</h2>
        </div>

        <div className="opening-hours__content">
          {/* Status Card */}
          <div className={`hours-status ${isOpen ? 'hours-status--open' : 'hours-status--closed'}`}>
            <div className="hours-status__icon">
              {isOpen ? (
                <CheckCircle size={32} />
              ) : (
                <XCircle size={32} />
              )}
            </div>
            <div className="hours-status__content">
              <div className="hours-status__badge">
                {isOpen ? 'Open Now' : 'Closed'}
              </div>
              <p className="hours-status__message">{statusMessage}</p>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="hours-schedule">
            <h3 className="hours-schedule__title">
              <Clock size={18} />
              Weekly Schedule
            </h3>
            <div className="hours-schedule__table">
              {schedule.map((day) => (
                <div
                  key={day.day}
                  className={`hours-schedule__row ${isToday(day.day) ? 'hours-schedule__row--today' : ''} ${!day.open ? 'hours-schedule__row--closed' : ''}`}
                >
                  <div className="hours-schedule__day">
                    {day.name}
                    {isToday(day.day) && (
                      <span className="hours-schedule__today-badge">Today</span>
                    )}
                  </div>
                  <div className="hours-schedule__time">
                    {day.open ? (
                      <>
                        {formatScheduleTime(day.open)} – {formatScheduleTime(day.close)}
                      </>
                    ) : (
                      <span className="hours-schedule__closed-text">Closed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="hours-schedule__note">
              <p>
                Hours may vary on public holidays. Please call ahead to confirm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
