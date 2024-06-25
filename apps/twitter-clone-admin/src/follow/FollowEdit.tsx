import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const FollowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Follower" source="follower" />
        <TextInput label="Following" source="following" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
