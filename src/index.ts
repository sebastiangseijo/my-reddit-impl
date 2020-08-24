import { MikroORM } from "@mikro-orm/core";
import {__db_name__, __db_type__, __prod__} from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: __db_name__,
    debug: __prod__,
    type: __db_type__,
  });
};

main();
