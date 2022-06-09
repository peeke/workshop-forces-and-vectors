
import { useAnimationFrame } from '/machinery/useAnimationFrame'

export function App() {
  useAnimationFrame({ onFrame: console.log })

  return (
    <div />
  )
}
