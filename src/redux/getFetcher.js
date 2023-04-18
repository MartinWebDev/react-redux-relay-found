const fetcher = (GRAPHQL_URL) => async (request, variables) => {
  const body = JSON.stringify({
    name: request.name, // used by graphql mock on tests
    query: request.text, // GraphQL text from input
    variables,
  });
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body,
  });

  const result = await response.json();
  return result;
};

export default fetcher;
