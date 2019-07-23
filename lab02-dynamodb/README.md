# Lab 02: Invoke Lambda function with DynamoDB access

> This lab uses the Serverless Framework!

## Goal

Create a simple API Gateway that invokes a Lambda function on an HTTP GET request that fetches data from DynamoDB.

## Instructions

First, create a new Serverless Framework project. Replace `$user` with your name (e.g. `andreas`). The command will create a simple project with a Lambda function written in TypeScript.

```
serverless create --template aws-nodejs-typescript --path dynamodb-$user
```

Change into the newly created directory and install the necessary dependencies.

```
cd dynamodb-$user
npm i
```

In the `serverless.yml` file, set the region to the AWS region of your choice.

### Add the DynamoDB table to serverless.yml

Remember that the Serverless Framework uses CloudFormation to deploy AWS resources. You can add CloudFormation resources to the `resources` section in `serverless.yml`.

Add a simple DynamoDB table to store items and pick a unique table name.

Deploy your changes.

### Add permissions

By default, the Lambda function is not allowed to access the newly created DynamoDB table. Add permissions to allow the function to run `dynamodb:Scan` operations against the newly created table. You can define them in the `provider` section of the  `serverless.yml` file.

Deploy your changes.

### Pass table name to function

Pass the DynamoDB table name to the Lambda function using the environment variable `TABLE_NAME`. You can define environment variables in the `provider` section of the  `serverless.yml` file.

Deploy your changes.

### Scan DynamoDB on GET request

Add the `aws-sdk` as a dependency.

In `handler.ts`, instantiate a DynamoDB client with...

```
import { DynamoDB } from 'aws-sdk';
const dynamoDb = new DynamoDB.DocumentClient();
```

...and scan the newly created table.

Return the array of items.

Deploy your changes and test the API. An empty array should be returned.

Now add some items to the table using the AWS Management Console and invoke the API again.

Finally, remove the stack.

```
serverless remove
```

## Help

* Serverless Framework [config file reference for AWS](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
* Serverless Framework [variables](https://serverless.com/framework/docs/providers/aws/guide/variables/)
* CloudFormation Resource [AWS::DynamoDB::Table](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)
* AWS SDK [DynamoDB.DocumentClient](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
