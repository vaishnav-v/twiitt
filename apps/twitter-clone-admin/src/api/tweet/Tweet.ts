import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Tweet = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  media: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
