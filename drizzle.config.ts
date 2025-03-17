import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './lib/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_p9wIe8ZQyCEH@ep-twilight-dew-a1fgmbby-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require" ,
  },
});
