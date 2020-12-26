# Harptos Epoch

Converts Calendar of Harptos dates to and from an epoch. 

## Installation

```
npm install harptos-epoch
```

## Basic Usage

### Import module

```js
import { toEpoch, fromEpoch } from 'harptos-epoch';
```

### Convert to Epoch

```js
const year = 1492;
const month = 4;
const day = 15;

const epoch = toEpoch(year, month, day);
// 784884960
```

### Convert from Epoch

```js
const epoch = 784884960;

const { year, month, day } = fromEpoch(epoch);
// year = 1492
// month = 4
// day = 15
```
