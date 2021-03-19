import { useFormikContext } from "formik";
import React from "react";

import DatePicker from "../datePicker/DatePicker";
import ErrorMessage from "./ErrorMessage";

const FormDatePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <DatePicker values={values[name]} onSelectYear={(item) => setFieldValue(name, item)} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormDatePicker;
