'use client'
import { useState, useSyncExternalStore } from 'react'
import { getClientSnapshot, getServerSnapshot, sub } from '~/lib/state'


export default function App() {
  useState(() => {
    console.count('render counter')
    return 0
  })
  const data = useSyncExternalStore(
    sub,
    () => {
      const result = getClientSnapshot()
      console.log('call getSnapshot', result)
      return result
    },
    () => {
      const result = getServerSnapshot()
      console.log('call getServerSnapshot', result)
      return result
    }
  )
  return <div>{data}</div>
}
