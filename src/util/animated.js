import { config, useSpring } from 'react-spring'

export const useTransition = (duration) => {
   const spring = useSpring({
    from: {
      opacity: 0,
      position: 'absolute'
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 3,
      duration: duration || 100,
      ...config.wobbly
    }
  })
  return [props, set, stop] = spring
}
