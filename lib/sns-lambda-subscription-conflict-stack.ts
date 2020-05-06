import * as lambda from "@aws-cdk/aws-lambda";
import * as lambdaSrcs from "@aws-cdk/aws-lambda-event-sources";
import * as cdk from '@aws-cdk/core';
import { NestedTopic } from './nested-topic';

export class SnsLambdaSubscriptionConflictStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic1 = new NestedTopic(this, "Topic1");
    const topic2 = new NestedTopic(this, "Topic2");

    const func = new lambda.Function(this, "Resource", {
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      memorySize: 128,
      timeout: cdk.Duration.seconds(3),
      code: new lambda.InlineCode("export handler = () => return \"OK\";")
    });

    func.addEventSource(new lambdaSrcs.SnsEventSource(topic1.topic));
    func.addEventSource(new lambdaSrcs.SnsEventSource(topic2.topic));
  }
}
