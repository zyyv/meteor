export function useCustomMouse() {
  const pos = useStorage('dotPos', { x: 0, y: 0 })
  const x = ref(pos.value.x)
  const y = ref(pos.value.y)

  const mouseHandler = (event: MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY
  }

  useEventListener(window, 'mousemove', mouseHandler, { passive: true })

  return { x, y }
}

export function isNear(p: { x: number, y: number }, dis: number) {
  const { x, y } = useCustomMouse()
  return Math.abs(p.x - x.value) < dis && Math.abs(p.y - y.value) < dis
}
