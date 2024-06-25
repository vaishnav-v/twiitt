import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tweets?: TweetListRelationFilter;
  username?: StringFilter;
};
