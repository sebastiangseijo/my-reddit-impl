import { Post } from "./entities/Post";
import { __db_name__, __db_type__, __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Post],
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  dbName: __db_name__,
  debug: !__prod__,
  type: __db_type__,
} as Parameters<typeof MikroORM.init>[0];
