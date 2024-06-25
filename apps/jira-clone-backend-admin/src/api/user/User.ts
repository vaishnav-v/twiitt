import { Comment } from "../comment/Comment";
import { Issue } from "../issue/Issue";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  issues?: Array<Issue>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
