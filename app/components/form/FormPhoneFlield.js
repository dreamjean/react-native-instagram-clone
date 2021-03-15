import { useFormikContext } from "formik";
import React from "react";

import PhoneInput from "../PhoneInput";
import ErrorMessage from "./ErrorMessage";

const FormPhoneField = ({ name, onRef, ...rest }) => {
  const {
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <PhoneInput
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onSubmitEditing={handleSubmit}
        ref={onRef}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormPhoneField;
