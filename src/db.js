import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "samuelmarin020gojo07sasuke",
  port: 3306,
  database: "companydb",
});
