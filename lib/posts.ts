'use server'

import { db } from '@/db'
import { postsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getPosts() {
  return await db.select().from(postsTable)
}

export async function getPost(id: string) {
  return (await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.id, id))
    .limit(1))[0]
}


export async function addPost(form: FormData) {
  await db.insert(postsTable).values({
    title: String(form.get('title')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editPost(form: FormData) {
  await db
    .update(postsTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(postsTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removePost(id: string) {
  await db.delete(postsTable).where(eq(postsTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}