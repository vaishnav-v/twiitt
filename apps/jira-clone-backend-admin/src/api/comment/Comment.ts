import { Issue } from "../issue/Issue";
import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  issue?: Issue | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
