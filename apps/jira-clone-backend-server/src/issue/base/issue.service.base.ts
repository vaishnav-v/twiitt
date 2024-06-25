/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Issue as PrismaIssue,
  Comment as PrismaComment,
  Project as PrismaProject,
  User as PrismaUser,
} from "@prisma/client";

export class IssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IssueCountArgs, "select">): Promise<number> {
    return this.prisma.issue.count(args);
  }

  async issues(args: Prisma.IssueFindManyArgs): Promise<PrismaIssue[]> {
    return this.prisma.issue.findMany(args);
  }
  async issue(args: Prisma.IssueFindUniqueArgs): Promise<PrismaIssue | null> {
    return this.prisma.issue.findUnique(args);
  }
  async createIssue(args: Prisma.IssueCreateArgs): Promise<PrismaIssue> {
    return this.prisma.issue.create(args);
  }
  async updateIssue(args: Prisma.IssueUpdateArgs): Promise<PrismaIssue> {
    return this.prisma.issue.update(args);
  }
  async deleteIssue(args: Prisma.IssueDeleteArgs): Promise<PrismaIssue> {
    return this.prisma.issue.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.issue
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async getProject(parentId: string): Promise<PrismaProject | null> {
    return this.prisma.issue
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.issue
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
