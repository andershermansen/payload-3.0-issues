'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function serverAction(formData: FormData): Promise<string> {
  const payload = await getPayload({ config: configPromise })
  const url = payload.getAdminURL()
  console.log('inside action', url)
  return url
}
