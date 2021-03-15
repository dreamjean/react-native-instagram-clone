import { useFormikContext } from "formik";
import React from "react";

import PreferredContact from "../auth/PreferredContact";

const tabs = [{ label: "Phone" }, { label: "Email" }];

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
