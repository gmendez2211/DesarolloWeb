import { Pool } from "pg";

const conn = new Pool({
  host: "dpg-crdj0nt2ng1s73803sdg-a.oregon-postgres.render.com",
  port: 5432,
  user: "user_colegioweb",
  password: "8ps5pHnkrId2APpjZ2JHLbQBwJOca8b3",
  database: "db_colegioweb",
  ssl: true,
});

export { conn };
