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
  Project as PrismaProject,
  Issue as PrismaIssue,
} from "@prisma/client";

export class ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProjectCountArgs, "select">): Promise<number> {
    return this.prisma.project.count(args);
  }

  async projects(args: Prisma.ProjectFindManyArgs): Promise<PrismaProject[]> {
    return this.prisma.project.findMany(args);
  }
  async project(
    args: Prisma.ProjectFindUniqueArgs
  ): Promise<PrismaProject | null> {
    return this.prisma.project.findUnique(args);
  }
  async createProject(args: Prisma.ProjectCreateArgs): Promise<PrismaProject> {
    return this.prisma.project.create(args);
  }
  async updateProject(args: Prisma.ProjectUpdateArgs): Promise<PrismaProject> {
    return this.prisma.project.update(args);
  }
  async deleteProject(args: Prisma.ProjectDeleteArgs): Promise<PrismaProject> {
    return this.prisma.project.delete(args);
  }

  async findIssues(
    parentId: string,
    args: Prisma.IssueFindManyArgs
  ): Promise<PrismaIssue[]> {
    return this.prisma.project
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .issues(args);
  }
}
