'use server'

import { db } from '@/db'
import { postsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getInfos() {
  return await db.select().from(postsTable)
}

export async function getinfo(id: string) {
  return (await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.id, id))
    .limit(1))[0]
}


export async function addInfo(form: FormData) {
  await db.insert(postsTable).values({
    name: String(form.get('nom')),
    gsm: String(form.get('nom')),
    number : String(form.get('number')),
    hour: String(form.get('hour')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editInfo(form: FormData) {
  await db
    .update(postsTable)
    .set({
      name: String(form.get('nom')),
      gsm: String(form.get('nom')),
      number : String(form.get('number')),
      hour: String(form.get('hour')),
      done: form.get('done') === 'on',
    })
    .where(eq(postsTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeInfo(id: string) {
  await db.delete(postsTable).where(eq(postsTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}