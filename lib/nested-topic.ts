import * as sns from "@aws-cdk/aws-sns";
import * as core from "@aws-cdk/core";

export class NestedTopic extends core.Construct {
    public readonly topic: sns.Topic;

    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        this.topic = new sns.Topic(this, "NestedTopic");
    }
}