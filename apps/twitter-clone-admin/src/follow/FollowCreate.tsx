import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Follower" source="follower" />
        <TextInput label="Following" source="following" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
