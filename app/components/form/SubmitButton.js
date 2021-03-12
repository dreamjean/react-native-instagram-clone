import { useFormikContext } from "formik";
import React from "react";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} {...{ title }} marginTop={16} />;
};

export default SubmitButton;
