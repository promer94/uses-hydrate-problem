'use client'
import { useSyncExternalStore } from 'react'
import { getClientSnapshot, getServerSnapshot, sub } from './state'


export default function App() {
  const data = useSyncExternalStore(
    sub,
    () => {
      console.log('call getSnapshot')
      return getClientSnapshot()
    },
    () => {
      console.log('call getServerSnapshot')
      return getServerSnapshot()
    }
  )
  return <div>{data}</div>
}
