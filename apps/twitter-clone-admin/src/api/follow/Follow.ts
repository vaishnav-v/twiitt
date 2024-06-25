export type Follow = {
  createdAt: Date;
  follower: string | null;
  following: string | null;
  id: string;
  status: boolean | null;
  updatedAt: Date;
};
