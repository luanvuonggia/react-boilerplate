import generateCalendar from 'antd/es/calendar/generateCalendar';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import 'antd/es/calendar/style';

const Calendar = generateCalendar(dayjsGenerateConfig);

export default Calendar;
