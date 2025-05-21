import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect();

	await createEmployee("Sarah Beara", "1990-01-01", 120000);
	await createEmployee("Sally Brown", "1991-01-01", 110000);
	await createEmployee("Luke Book", "1970-01-01", 90000);
  await createEmployee("Lia Bania", "1989-01-01", 150000);
  await createEmployee("Hannah Banana", "1990-12-01", 125000);
	await createEmployee("Megan Bregan", "1988-04-01", 115000);
	await createEmployee("Raymond Haymond", "1975-08-01", 95000);
  await createEmployee("Tracy Lacey", "1989-12-01", 70000);
  await createEmployee("Lilly Billy", "1975-06-01", 97000);
  await createEmployee("Tegan Regan", "1977-12-01", 77000);

	await db.end();
}
