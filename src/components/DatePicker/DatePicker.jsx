import generatePicker from 'antd/es/date-picker/generatePicker';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import 'antd/es/date-picker/style/index';

dayjs.extend(weekday);
dayjs.extend(localeData);

export default generatePicker(dayjsGenerateConfig);
