import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const postsTable = pgTable('info', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  gsm: text().notNull(),
  number: text().notNull(),
  hour: text().notNull(),
  done: boolean().default(false).notNull(),
})