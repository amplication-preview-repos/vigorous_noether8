import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
