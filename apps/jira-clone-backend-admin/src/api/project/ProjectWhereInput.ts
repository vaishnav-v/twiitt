import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IssueListRelationFilter } from "../issue/IssueListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  issues?: IssueListRelationFilter;
  name?: StringNullableFilter;
};
