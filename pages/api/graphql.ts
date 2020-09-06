import { ApolloServer } from "apollo-server-micro";

const server = new ApolloServer({});
const handler = server.createHandler({ path: "/api/graphql" });

export default handler;
