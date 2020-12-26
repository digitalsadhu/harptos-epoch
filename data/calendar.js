import _map from 'lodash/map.js';
import _times from 'lodash/times.js';

import months from './months/index.js';

export default {
  months: _map(months, month => ({
    ...month,
    weeks: _times(3, week => ({
      id: week,
      days: _times(10, day => ({
        id: day+(week*10)+1,
      })),
    })),
  })),
};
