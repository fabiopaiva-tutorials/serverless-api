import { APIGatewayEvent } from "aws-lambda";

export const hello = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(
    {
      message: "Hello",
    },
    null,
    2
  ),
});

export const world = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(
    {
      message: "World",
    },
    null,
    2
  ),
});

export const post = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(
    {
      message: "Post",
      body: event.body,
    },
    null,
    2
  ),
});
