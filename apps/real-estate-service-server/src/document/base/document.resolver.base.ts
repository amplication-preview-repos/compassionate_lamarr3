/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Document } from "./Document";
import { DocumentCountArgs } from "./DocumentCountArgs";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentFindUniqueArgs } from "./DocumentFindUniqueArgs";
import { CreateDocumentArgs } from "./CreateDocumentArgs";
import { UpdateDocumentArgs } from "./UpdateDocumentArgs";
import { DeleteDocumentArgs } from "./DeleteDocumentArgs";
import { Property } from "../../property/base/Property";
import { DocumentService } from "../document.service";
@graphql.Resolver(() => Document)
export class DocumentResolverBase {
  constructor(protected readonly service: DocumentService) {}

  async _documentsMeta(
    @graphql.Args() args: DocumentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Document])
  async documents(
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.service.documents(args);
  }

  @graphql.Query(() => Document, { nullable: true })
  async document(
    @graphql.Args() args: DocumentFindUniqueArgs
  ): Promise<Document | null> {
    const result = await this.service.document(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Document)
  async createDocument(
    @graphql.Args() args: CreateDocumentArgs
  ): Promise<Document> {
    return await this.service.createDocument({
      ...args,
      data: {
        ...args.data,

        property: args.data.property
          ? {
              connect: args.data.property,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Document)
  async updateDocument(
    @graphql.Args() args: UpdateDocumentArgs
  ): Promise<Document | null> {
    try {
      return await this.service.updateDocument({
        ...args,
        data: {
          ...args.data,

          property: args.data.property
            ? {
                connect: args.data.property,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Document)
  async deleteDocument(
    @graphql.Args() args: DeleteDocumentArgs
  ): Promise<Document | null> {
    try {
      return await this.service.deleteDocument(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Property, {
    nullable: true,
    name: "property",
  })
  async getProperty(
    @graphql.Parent() parent: Document
  ): Promise<Property | null> {
    const result = await this.service.getProperty(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
