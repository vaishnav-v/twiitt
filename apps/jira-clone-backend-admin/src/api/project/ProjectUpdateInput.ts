import { IssueUpdateManyWithoutProjectsInput } from "./IssueUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  issues?: IssueUpdateManyWithoutProjectsInput;
  name?: string | null;
};
