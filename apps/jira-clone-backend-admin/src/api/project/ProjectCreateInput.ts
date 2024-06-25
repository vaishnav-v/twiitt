import { IssueCreateNestedManyWithoutProjectsInput } from "./IssueCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  issues?: IssueCreateNestedManyWithoutProjectsInput;
  name?: string | null;
};
