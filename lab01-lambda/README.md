# Lab 01: Invoke Lambda function

> This lab uses the Serverless Framework!

## Goal

Create a simple API Gateway that invokes a Lambda function on an HTTP GET request.

## Instructions

First, create a new Serverless Framework project. Replace `$user` with your name (e.g. `andreas`). The command will create a simple project with a Lambda function written in TypeScript.

```
serverless create --template aws-nodejs-typescript --path lambda-$user
```

Change into the newly created directory and install the necessary dependencies.

```
cd lambda-$user
npm i
```

The relevant files are:

* `serverless.yml`: Serverless Framework config file
* `handler.ts`: Lambda function implementation

In the `serverless.yml` file, set the region to the AWS region of your choice.

The next command deploys the application. Keep in mind that the Serverless Frameworks generates a CloudFormation template under the covers.

```
serverless deploy
```

After some time, you can get information about the deployed application.

```
serverless info
```

The result should look like this:

```
Service Information
service: lambda-$user
stage: dev
region: us-east-1
stack: lambda-$user-dev
resources: 10
api keys:
  None
endpoints:
  GET - https://bywfqk9qrd.execute-api.us-east-1.amazonaws.com/dev/hello
functions:
  hello: lambda-$user-dev-hello
layers:
  None
```

Open your browser and open the URL of the endpoint (e.g. `https://bywfqk9qrd.execute-api.us-east-1.amazonaws.com/dev/hello`).

The default implementation of the Lambda function in `handler.ts` returns a lot of information. Change that and return something else (e.g., return a random number). Don't forget to save the changes in `handler.ts`. Run the `serverless deploy` command again to deploy your changes. Reload the website and see if it works.

Finally, remove the deployed application.

```
serverless remove
```

## Help

* Serverless Framework [config file reference for AWS](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
