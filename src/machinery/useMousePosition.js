import { useEvent } from '/machinery/useEvent'

export function useMousePosition(onMouseMove) {
  const callback = useEvent(onMouseMove)

  React.useEffect(
    () => {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
      function handleMouseMove(e) {
        callback({ x: e.clientX, y: e.clientY })
      }
    },
    [callback]
  )
}
