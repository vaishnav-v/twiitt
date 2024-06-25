import { SortOrder } from "../../util/SortOrder";

export type IssueOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  estimate?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  projectId?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
