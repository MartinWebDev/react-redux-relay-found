import { createResolver } from "./createResolver";
import getFetcher from "./getFetcher";

export const getFetcherResolver = () => {
  const fetch = getFetcher("http://localhost:3333/graphql");
  return createResolver(fetch);
};
