import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { DynamoDB } from 'aws-sdk';
const dynamoDb = new DynamoDB.DocumentClient();

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  const data = await dynamoDb.scan({
    TableName: process.env.TABLE_NAME
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(data.Items, null, 2),
  };
}
