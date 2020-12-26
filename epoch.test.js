import tap from 'tap';
import { epoch, totalDays, year, yearEpoch, yearFromYearEpoch, monthFromMonthEpoch, monthEpoch, fromEpoch } from './data/epoch.js';

// totalDays
tap.test('total days', (t) => {
    const e = epoch(1494, 9, 4);

    t.equal(totalDays(e), 545930);
    t.end();
});

// epoch and yearFromYearEpoch
tap.test('year - 1494', (t) => {
    const e = epoch(1494, 9, 4);
    const y = yearFromYearEpoch(e);
    
    t.equal(year(e), 1494);
    t.equal(yearFromYearEpoch(yearEpoch(1494)), 1494);
    t.equal(y, 1494);
    t.end();
});

tap.test('year - 1214', (t) => {
    const e = epoch(1214, 9, 4);
    const y = yearFromYearEpoch(e);
    t.equal(year(e), 1214);
    t.equal(yearFromYearEpoch(yearEpoch(1214)), 1214);
    t.equal(y, 1214);
    t.end();
});

tap.test('year - 1', (t) => {
    const e = epoch(1, 9, 4);
    const y = yearFromYearEpoch(e);
    t.equal(year(e), 1);
    t.equal(yearFromYearEpoch(yearEpoch(1)), 1);
    t.equal(y, 1);
    t.end();
});

tap.test('year - 999', (t) => {
    const e = epoch(999, 9, 4);
    const y = yearFromYearEpoch(e);
    t.equal(year(e), 999);
    t.equal(yearFromYearEpoch(yearEpoch(999)), 999);
    t.equal(y, 999);
    t.end();
});

tap.test('year - 1001', (t) => {
    const e = epoch(1001, 9, 4);
    const y = yearFromYearEpoch(e);
    t.equal(year(e), 1001);
    t.equal(yearFromYearEpoch(yearEpoch(1001)), 1001);
    t.equal(y, 1001);
    t.end();
});

tap.test('year - 1600', (t) => {
    const e = epoch(1600, 9, 4);
    const y = yearFromYearEpoch(e);
    t.equal(year(e), 1600);
    t.equal(yearFromYearEpoch(yearEpoch(1600)), 1600);
    t.equal(y, 1600);
    t.end();
});

// monthEpoch
tap.test('monthEpoch - year = 1493 month = 1', (t) => {
    t.equal(monthEpoch(1, 1493), 0);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 2', (t) => {
    t.equal(monthEpoch(2, 1493), 44640);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 3', (t) => {
    t.equal(monthEpoch(3, 1493), 44640 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 4', (t) => {
    t.equal(monthEpoch(4, 1493), 44640 + 43200 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 5', (t) => {
    t.equal(monthEpoch(5, 1493), 44640 + 43200 + 43200 + 44640);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 6', (t) => {
    t.equal(monthEpoch(6, 1493), 44640 + 43200 + 43200 + 44640 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 7', (t) => {
    t.equal(monthEpoch(7, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 8', (t) => {
    t.equal(monthEpoch(8, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 9', (t) => {
    t.equal(monthEpoch(9, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 10', (t) => {
    t.equal(monthEpoch(10, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640 + 43200 + 44640);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 11', (t) => {
    t.equal(monthEpoch(11, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640 + 43200 + 44640 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1493 month = 12', (t) => {
    t.equal(monthEpoch(12, 1493), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640 + 43200 + 44640 + 43200 + 44640);
    t.end();
});

tap.test('monthEpoch - year = 1492 (leap year) month = 7', (t) => {
    t.equal(monthEpoch(7, 1492), 44640 + 43200 + 43200 + 44640 + 43200 + 43200);
    t.end();
});

tap.test('monthEpoch - year = 1492 (leap year) month = 8', (t) => {
    t.equal(monthEpoch(8, 1492), 44640 + 43200 + 43200 + 44640 + 43200 + 43200 + 44640 + 1440);
    t.end();
});

// monthFromMonthEpoch
tap.test('month - year = 1493 month = 1', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(1, 1493), 1493);
    t.equal(month, 1);
    t.end();
});

tap.test('month - year = 1493 month = 2', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(2, 1493), 1493);
    t.equal(month, 2);
    t.end();
});

tap.test('month - year = 1493 month = 3', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(3, 1493), 1493);
    t.equal(month, 3);
    t.end();
});

tap.test('month - year = 1493 month = 4', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(4, 1493), 1493);
    t.equal(month, 4);
    t.end();
});

tap.test('month - year = 1493 month = 5', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(5, 1493), 1493);
    t.equal(month, 5);
    t.end();
});

tap.test('month - year = 1493 month = 6', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(6, 1493), 1493);
    t.equal(month, 6);
    t.end();
});

tap.test('month - year = 1493 month = 7', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(7, 1493), 1493);
    t.equal(month, 7);
    t.end();
});

tap.test('month - year = 1493 month = 8', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(8, 1493), 1493);
    t.equal(month, 8);
    t.end();
});

tap.test('month - year = 1493 month = 9', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(9, 1493), 1493);
    t.equal(month, 9);
    t.end();
});

tap.test('month - year = 1493 month = 10', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(10, 1493), 1493);
    t.equal(month, 10);
    t.end();
});

tap.test('month - year = 1493 month = 11', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(11, 1493), 1493);
    t.equal(month, 11);
    t.end();
});

tap.test('month - year = 1493 month = 12', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(12, 1493), 1493);
    t.equal(month, 12);
    t.end();
});

tap.test('month - year = 1493 month = 7', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(7, 1492), 1492);
    t.equal(month, 7);
    t.end();
});

tap.test('month - year = 1493 month = 8', (t) => {
    const month = monthFromMonthEpoch(monthEpoch(8, 1492), 1492);
    t.equal(month, 8);
    t.end();
});

tap.test('fromEpoch', (t) => {
    const { year, month, day } = fromEpoch(epoch(1493, 7, 14));
    t.equal(year, 1493);
    t.equal(month, 7);
    t.equal(day, 14);
    t.end();
});
