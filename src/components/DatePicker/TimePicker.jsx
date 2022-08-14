import React from 'react';

import { TIME_FORMAT } from 'utils/constants';

import DatePicker from './DatePicker';

const TimePicker = React.forwardRef((props, ref) => (
  <DatePicker
    {...props}
    picker="time"
    mode={undefined}
    ref={ref}
    format={TIME_FORMAT}
  />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;
