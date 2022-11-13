# Relay TodoMVC with Redux added

Relay TodoMVC with routing.

This repo is based on the example from [`found-relay`](https://github.com/relay-tools/found-relay/tree/master/examples/todomvc).\
I have added `redux@latest` to this example, upgraded `react` to v18 and got the example working again.

This repo now uses the follow packages all linked together:

- `react`
- `redux`
- `found` + `farce`
- `relay`
- `found-relay`

## Usage

Adding redux (somehow) meant found-relay could no longer work with a local only relay network configuration. It generates a strange error with an unrelated message. The actual source of the message turns out to be the convertFetcher function in relay, which other libraries seem to account for, but not this specific combination.\
The fix was simple however, instead of a locally defined schema, I created a basic express server with the schema configuration and pointed the network setup to that instead.\
This does however mean to run this demo you must also run the server locally.

- In one terminal run `yarn run start:server`
- In another terminal run `yarn run start`

Then point your browser at [http://localhost:8080/](http://localhost:8080/).\
You can also point to [http://localhost:4000/gql](http://localhost:4000/gql) to view the graphql playground.
