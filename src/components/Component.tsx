'use client'

import { serverAction } from './Action'

export default function Component() {
  return (
    <form action={serverAction}>
      <input type="submit" value="Submit" />
    </form>
  )
}
