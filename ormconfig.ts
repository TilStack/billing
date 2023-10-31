import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config:PostgresConnectionOptions={
    type:"postgres",
    database:"billingdb",
    host:"postgres_container",
    port:5432,
    username:"postgres",
    password:"postgres",
    synchronize:true
}

export default config