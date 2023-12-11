import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Baths" source="baths" />
        <NumberInput step={1} label="Bedrooms" source="bedrooms" />
        <NumberInput step={1} label="Beds" source="beds" />
        <NumberInput step={1} label="Guest Limit" source="guestLimit" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Nightly Price" source="nightlyPrice" />
        <NumberInput label="Rent Price" source="rentPrice" />
        <NumberInput label="Sell Price" source="sellPrice" />
      </SimpleForm>
    </Edit>
  );
};
