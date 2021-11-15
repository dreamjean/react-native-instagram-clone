import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ title, loading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={handleSubmit} {...{ title, loading }} marginTop={16} />
  );
};

export default SubmitButton;
