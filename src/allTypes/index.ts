import { decorateType } from "@nexus/schema";
import { GraphQLDate, GraphQLURL } from "graphql-scalars";

//custom scalars
export const GQLDate = decorateType(GraphQLDate, {
  rootTyping: "Date",
  asNexusMethod: "date",
});

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
});

//query type, bio type and position type
export * from "./Query";
export * from "./Bio";
export * from "./Position";
