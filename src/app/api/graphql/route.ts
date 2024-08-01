import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { connect } from "@/utils/mongoose-connect";
import { TypeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
connect();

const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
