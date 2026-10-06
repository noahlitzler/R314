import { Database } from "bun:sqlite";

const dbPath = import.meta.env.SQLITE_DB_PATH;

const db = new Database(dbPath);

export function getClients() {
  return db.query(`
    SELECT
      id,
      name,
      email,
      address,
      latitude,
      longitude
    FROM clients
    ORDER BY name
  `).all();
}

export default db;