'use client'
import { useSyncExternalStore, use } from 'react'
import { getClientSnapshot, getServerSnapshot, sub } from './state'

const promise = new Promise((res) => {
  setTimeout(() => {
    res(true)
  }, 2000)
})

export default function App() {
  use(promise)
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
