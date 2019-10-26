---
title: "Deploy a Serverless React + GraphQL App on Netlify: Part One"
date: "2019-10-23"
description: "Get a serverless GraphQL app up and running in 10 minutes."
tags: ["React", "GraphQL", "Netlify Functions", "AWS"]
---

## Why this stack?

- Netlity is great for hosting. Now can deploy server side code along with client side code with AWS lambda functions.
  - Don't have to touch AWS
  - Netlify Continuous Integration
    - Pull requests trigger branch previews
    - Client and lambda functions served from the same URL. No Cors issues.

## Assumptions

- Knowledge of react, graphql, apollo client and server => Learn how to deploy a fullstack graphql app to netlify.

## Steps

1. Create React App, deploy to netlify
2. Add Hello World Lambda function.
3. Install apollo-server-lambda, add typeDefs and resolvers
4. Install apollo-client. Wrap app with apollo provider
5. Make a query with `@apollo/react-hooks` useStaticQuery hook

## Step One: Deploy Create-React-App to netlify

## Step Two: Add a Hello World lambda function

## Step Three: Install Apollo Server Lambda

## Step Four: Add Apollo Client

## Step Five: Make a query with the React Apollo useStaticQuery hook
