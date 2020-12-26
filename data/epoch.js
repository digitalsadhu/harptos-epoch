import _floor from 'lodash/floor.js';
import _reduce from 'lodash/reduce.js';

import calendar from './calendar.js';

const MINUTES_IN_ONE_DAY = 1440;

const yearEpoch = year => (year * 525600) + (_floor(year / 4) * MINUTES_IN_ONE_DAY);

const yearFromYearEpoch = epoch => year(epoch);

const monthEpoch = (month, year) => _reduce(calendar.months, (sum, m) => {
  let monthMinutes = 0;
  // only count full months, current month is counted in days
  if (m.id < month) {
    monthMinutes += m.holiday
      ? MINUTES_IN_ONE_DAY * 31  // 44640
      : MINUTES_IN_ONE_DAY * 30  // 43200;

    if (m.id === 7 && year % 4 === 0) {
      monthMinutes += MINUTES_IN_ONE_DAY;
    }
  }
  return monthMinutes + sum;
}, 0);

const epochForMonth = (month, isLeapYear) => {
  const m = calendar.months[month - 1];
  let monthMinutes = m.holiday
    ? MINUTES_IN_ONE_DAY * 31  // 44640
    : MINUTES_IN_ONE_DAY * 30  // 43200;

  if (m.id === 7 && isLeapYear) {
    monthMinutes += MINUTES_IN_ONE_DAY;
  }

  return monthMinutes;
}

const monthFromMonthEpoch = (epoch, year) => {
  const isLeapYear = year % 4 === 0;

  for (const m of calendar.months) {
    epoch -= epochForMonth(m.id, isLeapYear);
    if (epoch < 0) return m.id;
  }
}

const dayEpoch = day => day * MINUTES_IN_ONE_DAY;

const totalDays = epoch => _floor(epoch / MINUTES_IN_ONE_DAY);

const year = epoch => {
  const FOUR_YEARS = 365 * 4 + 1;
  const days = totalDays(epoch);
  const numFourYears = _floor(days / FOUR_YEARS);
  const remainderDays = days % FOUR_YEARS;
  const remainderYears = _floor(remainderDays / 365);
  return (numFourYears * 4) + remainderYears;
}

const fromEpoch = (epoch) => {
  const y = yearFromYearEpoch(epoch);
  const ye = yearEpoch(y);
  epoch -= ye;
  const m = monthFromMonthEpoch(epoch, y);
  const me = monthEpoch(m, y);
  epoch -= me;
  const d = totalDays(epoch);
  return { year: y, month: m, day: d };
};

const epoch = (year, month, day) => {
  return yearEpoch(year) + monthEpoch(month, year) + dayEpoch(day);
};

export { totalDays, year, yearEpoch, monthEpoch, yearFromYearEpoch, monthFromMonthEpoch, fromEpoch, epoch };

