import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type User {
    id: String
    userName: String
    email: String
    phoneNumber: String
    profileImageUrl: String
    emergencyPhone: String
    role: String
    appliedJobs: [String]
    chatRooms: [String]
  }
  input signUpUserInput {
    userName: String!
    email: String!
    password: String!
  }
  input loginUserInput {
    email: String!
    password: String!
  }
  type Mutation {
    signUpUser(input: signUpUserInput): String
    loginUser(input: loginUserInput): String
  }
  type Query {
    getUserInfo: String
  }
`;
