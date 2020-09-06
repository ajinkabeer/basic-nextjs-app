import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";

const server = new ApolloServer({ schema });
const handler = server.createHandler({ path: "/api/graphql" });

export default handler;
