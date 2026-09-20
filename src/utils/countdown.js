export const getNextSundaySession = () => {
  const now = new Date();
  const pktOffset = 5 * 60; // UTC+5 in minutes
  const localOffset = now.getTimezoneOffset();
  const pktNow = new Date(now.getTime() + (pktOffset + localOffset) * 60000);

  const nextSunday = new Date(pktNow);
  const day = pktNow.getDay();
  // If today is Sunday and before 8:30 PM PKT, target today 8:30 PM.
  // Otherwise target next Sunday.
  const targetHour = 20;
  const targetMin = 30;

  let daysUntilSunday = (7 - day) % 7;
  if (day === 0) {
    const isPastTodaySession =
      pktNow.getHours() > targetHour ||
      (pktNow.getHours() === targetHour && pktNow.getMinutes() >= targetMin);
    if (isPastTodaySession) {
      daysUntilSunday = 7;
    } else {
      daysUntilSunday = 0;
    }
  }

  nextSunday.setDate(pktNow.getDate() + daysUntilSunday);
  nextSunday.setHours(targetHour, targetMin, 0, 0); // 08:30 PM PKT

  return new Date(nextSunday.getTime() - (pktOffset + localOffset) * 60000);
};

export const getTimeRemaining = (targetDate) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    isExpired: total <= 0,
  };
};
