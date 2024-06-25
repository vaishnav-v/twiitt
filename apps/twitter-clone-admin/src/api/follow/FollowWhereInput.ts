import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FollowWhereInput = {
  follower?: StringNullableFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
  status?: BooleanNullableFilter;
};
