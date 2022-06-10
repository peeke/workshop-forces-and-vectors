// import { Vector2 } from 'three'
import { useSpring, animated } from 'react-spring'
import { useAnimationFrame } from '/machinery/useAnimationFrame'
import styles from './App.css'

export function App() {
  const [spring, api] = useSpring(() => ({ x: 0 }))
  const stateRef = React.useRef({
    position: 0,
    velocity: 0,
    acceleration: 0,
  })

  useAnimationFrame({ onFrame(dt) {
    stateRef.current.position += stateRef.current.velocity * dt
    stateRef.current.velocity += stateRef.current.position * dt
    api.set({ x: stateRef.current.position })
  } })

  return (
    <div className={styles.app}>
      <animated.div className={styles.object} style={spring} />
    </div>
  )
}
