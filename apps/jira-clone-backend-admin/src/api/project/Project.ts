import { Issue } from "../issue/Issue";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  issues?: Array<Issue>;
  name: string | null;
  updatedAt: Date;
};
