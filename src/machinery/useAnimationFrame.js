import { useEvent } from '/machinery/useEvent'

export function useAnimationFrame({ onFrame, enabled = true }) {
  const callback = useEvent(onFrame)

  React.useEffect(
    () => {
      if (!enabled) return

      let timestamp = performance.now()
      let frame = requestAnimationFrame(handleFrame)
      return () => cancelAnimationFrame(frame)

      function handleFrame(t) {
        callback((t - timestamp) / 1000)
        timestamp = t
        frame = requestAnimationFrame(handleFrame)
      }
    },
    [callback, enabled]
  )
}
