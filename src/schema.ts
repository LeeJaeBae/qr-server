import {  makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

const allTypes: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")
);


const allResolvers = fileLoader(
  path.join((__dirname), "./api/**/*.resolvers.*")
)

const mergedTypes = mergeTypes(allTypes)
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
})

export default schema;