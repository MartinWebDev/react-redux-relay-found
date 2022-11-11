import { createResolver } from "./createResolver";
import fetcher from "./getFetcher";

export const getFetcherResolver = () => {
  const fetch = fetcher("http://localhost:4000");
  return createResolver(fetch);
};
