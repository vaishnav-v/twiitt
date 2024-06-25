import { Comment } from "../comment/Comment";
import { Project } from "../project/Project";
import { User } from "../user/User";

export type Issue = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  estimate: number | null;
  id: string;
  priority?: "Option1" | null;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
