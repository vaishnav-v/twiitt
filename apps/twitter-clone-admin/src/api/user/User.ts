import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string;
};
