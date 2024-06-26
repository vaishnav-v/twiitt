/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { IssueService } from "../issue.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IssueCreateInput } from "./IssueCreateInput";
import { Issue } from "./Issue";
import { IssueFindManyArgs } from "./IssueFindManyArgs";
import { IssueWhereUniqueInput } from "./IssueWhereUniqueInput";
import { IssueUpdateInput } from "./IssueUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IssueControllerBase {
  constructor(
    protected readonly service: IssueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Issue })
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createIssue(@common.Body() data: IssueCreateInput): Promise<Issue> {
    return await this.service.createIssue({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        estimate: true,
        id: true,
        priority: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Issue] })
  @ApiNestedQuery(IssueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async issues(@common.Req() request: Request): Promise<Issue[]> {
    const args = plainToClass(IssueFindManyArgs, request.query);
    return this.service.issues({
      ...args,
      select: {
        createdAt: true,
        description: true,
        estimate: true,
        id: true,
        priority: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async issue(
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<Issue | null> {
    const result = await this.service.issue({
      where: params,
      select: {
        createdAt: true,
        description: true,
        estimate: true,
        id: true,
        priority: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateIssue(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() data: IssueUpdateInput
  ): Promise<Issue | null> {
    try {
      return await this.service.updateIssue({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          estimate: true,
          id: true,
          priority: true,

          project: {
            select: {
              id: true,
            },
          },

          status: true,
          title: true,
          typeField: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteIssue(
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<Issue | null> {
    try {
      return await this.service.deleteIssue({
        where: params,
        select: {
          createdAt: true,
          description: true,
          estimate: true,
          id: true,
          priority: true,

          project: {
            select: {
              id: true,
            },
          },

          status: true,
          title: true,
          typeField: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        issue: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "update",
    possession: "any",
  })
  async connectComments(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "update",
    possession: "any",
  })
  async updateComments(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Issue",
    action: "update",
    possession: "any",
  })
  async disconnectComments(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }
}
