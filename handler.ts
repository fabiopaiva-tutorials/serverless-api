import { APIGatewayEvent } from "aws-lambda";

export const health = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status: "running",
        uuid: event.requestContext.requestId,
      },
      null,
      2
    ),
  };
};
