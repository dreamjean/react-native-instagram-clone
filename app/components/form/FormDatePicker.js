import { useFormikContext } from "formik";
import React from "react";

import DatePicker from "../datePicker/DatePicker";
import ErrorMessage from "./ErrorMessage";

const FormDatePicker = ({ name }) => {
  const {
    setFieldValue,
    values: { date, month, year },
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <DatePicker
        date={date}
        month={month}
        year={year}
        onSelectDate={(date) => setFieldValue(name, { date })}
        onSelectMonth={(month) => setFieldValue(name, { month })}
        onSelectYear={(year) => setFieldValue(name, { year })}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormDatePicker;
