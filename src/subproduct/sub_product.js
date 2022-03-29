import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  SimpleForm,
  Create,
  TextField,
  TextInput,
  EditButton,
  required,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const PostIcon = BookIcon;

export const SubProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <TextField source="product_id" />
      <TextField source="currency" />
      <TextField source="price" />
      <TextField source="stock" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SubProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="desc" validate={required()} />
      <TextInput source="product_id" validate={required()} />
      <TextInput source="currency" validate={required()} />
      <TextInput source="price" validate={required()} />
      <TextInput source="stock" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const SubProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="desc" validate={required()} />
      <TextInput source="product_id" validate={required()} />
      <TextInput source="currency" validate={required()} />
      <TextInput source="price" validate={required()} />
      <TextInput source="stock" validate={required()} />
    </SimpleForm>
  </Create>
);
