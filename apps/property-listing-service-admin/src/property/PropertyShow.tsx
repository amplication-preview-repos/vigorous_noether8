import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Baths" source="baths" />
        <TextField label="Bedrooms" source="bedrooms" />
        <TextField label="Beds" source="beds" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Guest Limit" source="guestLimit" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="Nightly Price" source="nightlyPrice" />
        <TextField label="Rent Price" source="rentPrice" />
        <TextField label="Sell Price" source="sellPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
