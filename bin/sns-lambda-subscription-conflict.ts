#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SnsLambdaSubscriptionConflictStack } from '../lib/sns-lambda-subscription-conflict-stack';

const app = new cdk.App();
new SnsLambdaSubscriptionConflictStack(app, 'SnsLambdaSubscriptionConflictStack');
