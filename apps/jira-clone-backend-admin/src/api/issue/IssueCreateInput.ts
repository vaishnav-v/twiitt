import { CommentCreateNestedManyWithoutIssuesInput } from "./CommentCreateNestedManyWithoutIssuesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IssueCreateInput = {
  comments?: CommentCreateNestedManyWithoutIssuesInput;
  description?: string | null;
  estimate?: number | null;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
