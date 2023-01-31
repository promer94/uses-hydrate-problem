export let clientData = 0
export const serverData = 0
export const listener: (() => void)[] = []

export const sub = (callback: () => void) => {
  listener.push(callback)
  return () => {
    const index = listener.indexOf(callback)
    if (index >= 0) {
      listener[index] = listener[listener.length - 1]
      listener.pop()
    }
  }
}

export const updateClientData = (data: number) => {
  clientData = data
  listener.map(v => v())
}

export const getClientSnapshot = () => clientData
export const getServerSnapshot = () => serverData
