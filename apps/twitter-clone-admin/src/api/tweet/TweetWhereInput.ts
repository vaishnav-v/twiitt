import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  media?: JsonFilter;
  user?: UserWhereUniqueInput;
};
