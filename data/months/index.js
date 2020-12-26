import _sortBy from 'lodash/sortBy.js';

import hammer from './hammer.js';
import alturiak from './alturiak.js';
import ches from './ches.js';
import tarsakh from './tarsakh.js';
import mirtul from './mirtul.js';
import kythorn from './kythorn.js';
import flamerule from './flamerule.js';
import eleasis from './eleasis.js';
import eleint from './eleint.js';
import marpenoth from './marpenoth.js';
import uktar from './uktar.js';
import nightal from './nightal.js';

export default _sortBy({
  hammer,
  alturiak,
  ches,
  tarsakh,
  mirtul,
  kythorn,
  flamerule,
  eleasis,
  eleint,
  marpenoth,
  uktar,
  nightal,
}, ['id']);
