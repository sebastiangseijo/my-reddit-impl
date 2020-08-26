import { Post } from "./entities/Post";
import { __db_name__, __db_type__, __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: __db_name__,
  debug: !__prod__,
  type: __db_type__,
} as Parameters<typeof MikroORM.init>[0];
