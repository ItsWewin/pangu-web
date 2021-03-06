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
  ReferenceInput,
  SelectInput,
  ReferenceField,
  AutocompleteArrayInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
  ImageField,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import Button from "@material-ui/core/Button";
export const PostIcon = BookIcon;

export const SubProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <ReferenceField label="product" source="product_id" reference="products">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceInput
        label="product"
        source="product_id"
        reference="products"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="currency" validate={required()} />
      <TextInput source="price" validate={required()} />
      <TextInput source="stock" validate={required()} />
      <ReferenceArrayInput source="attribute_id" reference="attributes">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <ImageInput multiple={true} source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const SubProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput multiline source="desc" validate={required()} />
      <ReferenceInput
        label="product"
        source="product_id"
        reference="products"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="currency" validate={required()} />
      <TextInput source="price" validate={required()} />
      <TextInput source="stock" validate={required()} />
      <ReferenceArrayInput source="attribute_id" reference="attributes">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <ImageInput multiple={true} source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
