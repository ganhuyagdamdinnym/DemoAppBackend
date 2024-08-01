import { mergeTypeDefs } from "@graphql-tools/merge";
import { CompanyTypeDefs } from "./company";
import { UserTypeDefs } from "./user";
export const TypeDefs = mergeTypeDefs([UserTypeDefs, CompanyTypeDefs]);
