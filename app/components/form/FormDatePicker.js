import { useFormikContext } from "formik";

import DatePicker from "../datePicker/DatePicker";
import ErrorMessage from "./ErrorMessage";

const FormDatePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const { date, month, year } = values[name];

  // console.log("date", date);
  // console.log("month", month);
  // console.log("year", year);

  return (
    <>
      <DatePicker
        date={date}
        month={month}
        year={year}
        onSelectDate={(date) =>
          setFieldValue(name, [{ date }, ...month, ...year])
        }
        onSelectMonth={(month) =>
          setFieldValue(name, [{ month }, ...date, ...year])
        }
        onSelectYear={(year) =>
          setFieldValue(name, [{ year }, ...date, ...month])
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormDatePicker;
