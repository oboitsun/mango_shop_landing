import { showrooms } from '../../lib/data'
import { useState, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Content from './Content'

export default function ShowroomPreview({ showroom, i }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }, [])
    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`)
      media.addListener(updateTarget)

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeListener(updateTarget)
    }, [])

    return targetReached
  }
  const isBreakpoint = useMediaQuery(599)
  const odd = !!((i + 1) % 2)
  const img_block = (j) => (
    <div key={j} className='sm:w-full lg:w-5/12 '>
      <img className='w-auto' src={showroom.showcase} alt='' />
    </div>
  )
  const content_block = (j) => (
    <div key={j} className='sm:w-full lg:w-7/12 px-10 flex '>
      <Content showroom={showroom} i={i} />
    </div>
  )
  const odd_flow = [img_block, content_block]
  const even_flow = [content_block, img_block]
  const block = (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={
        isBreakpoint
          ? 'sh w-full h-auto mb-10  flex flex-col transition-colors hover:bg-gray-50'
          : 'sh w-full h-auto mb-40  flex flex-row  transition-colors hover:bg-gray-50'
      }>
      {odd &&
        odd_flow.map((b, j) => {
          const bl = b(j)
          return bl
        })}
      {!isBreakpoint &&
        !odd &&
        even_flow.map((b, j) => {
          const bl = b(j)
          return bl
        })}
      {isBreakpoint &&
        !odd &&
        odd_flow.map((b, j) => {
          const bl = b(j)
          return bl
        })}
    </motion.div>
  )

  return block
}
