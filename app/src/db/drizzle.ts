import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema'; // Import everything from the schema file

config({ path: '.env' });

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema }); // Use the schema here