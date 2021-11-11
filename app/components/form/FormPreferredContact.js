import { useFormikContext } from "formik";

import PreferredContact from "../auth/PreferredContact";

const tabs = [
  { id: "phone", label: "Phone" },
  { id: "email", label: "Email" },
];

const FormPreferredContact = ({ name, onNextPage }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <PreferredContact
      tabs={tabs}
      onPress={() => setFieldValue(name, !values[name])}
      showPhone={values[name]}
      {...{ onNextPage }}
    />
  );
};

export default FormPreferredContact;
