'use client'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import {
  getClientSnapshot,
  getServerSnapshot,
  sub,
  updateClientData
} from './state'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const data = useSyncExternalStore(
    sub,
    () => getClientSnapshot(),
    () => getServerSnapshot()
  )
  const mountRef = useRef(false)
  const dataRef = useRef(data)
  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      setTimeout(() => {
        updateClientData(dataRef.current + 1)
      }, 300)
    }
  }, [])
  return (
    <html>
      <head />
      <body>
        <div>
          <h1>{data}</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
