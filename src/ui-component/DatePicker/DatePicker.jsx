import DatePickerUI, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";
import { RiCalendarLine } from "react-icons/ri";
registerLocale("ru", ru);

const DateInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        className="input-datePiker"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export const DatePicker = ({ ...props }) => {
  return (
    <div>
      <h4 className="date-title">{props.title}</h4>
      <div className="datepicker-container">
        <DatePickerUI
          {...props}
          locale="ru"
          dateFormat="dd.MM.yyyy"
          customTimeInput={<DateInput placeholder={props.placeholder} />}
        />
        <span className="calendar-icon">
          <RiCalendarLine />
        </span>
      </div>
    </div>
  );
};
