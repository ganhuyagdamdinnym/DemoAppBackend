import gql from "graphql-tag";

export const CompanyTypeDefs = gql`
  type Company {
    id: String
    name: String
    description: String
    location: String
    contactEmail: String
  }
  input signUpCompanyInput {
    name: String
    password: String
    description: String
    location: String
    contactEmail: String
  }

  type Mutation {
    signUpCompany(input: signUpCompanyInput): String
  }
`;
