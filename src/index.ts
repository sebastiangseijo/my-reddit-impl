import "reflect-metadata";
import express from "express";
import { MikroORM } from "@mikro-orm/core";
import { buildSchema } from "type-graphql";
import microConfig from "./mikro-orm.config";
import { PostResolver } from "./resolvers/Post";
import { ApolloServer } from "apollo-server-express";

const main = async () => {
  const app = express();
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
      validate: false,
    }),
    context: () => ({
      em: orm.em,
    }),
  });

  apolloServer.applyMiddleware({ app });

  // const post = orm.em.create(Post, { title: "my first post" });
  // await orm.em.persistAndFlush(post);
  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

  app.get("/", (_, res) => {
    res.send("hello");
  });
  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
