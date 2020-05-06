# SNS Lambda Subscription Conflict Proof-of-Concept

This application exhibits an error where two `Topic`s with the same `id` fail to be added as Event Sources to a single
Lambda `Function` due to how the underlying *subscription's* "id" is generated ([source](https://github.com/aws/aws-cdk/blob/master/packages/%40aws-cdk/aws-sns-subscriptions/lib/lambda.ts#L37)).  Instead, it should use
`topic.node.uniqueId` to avoid this issue.

```
$ npm run build
> sns-lambda-subscription-conflict@0.1.0 build /Users/robwet/sns-lambda-subscription-conflict
> tsc
$ cdk synth
A subscription with id "NestedTopic" already exists under the scope SnsLambdaSubscriptionConflictStack/Resource
Subprocess exited with error 1
```
