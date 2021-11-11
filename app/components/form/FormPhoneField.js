import { useFormikContext } from "formik";

import PhoneInput from "../PhoneInput";
import ErrorMessage from "./ErrorMessage";

const FormPhoneField = ({ name, onRef, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
    handleSubmit,
  } = useFormikContext();

  return (
    <>
      <PhoneInput
        error={errors[name]}
        touched={touched[name]}
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
