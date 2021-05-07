import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

function HomeImagesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
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
  const isBreakpoint = useMediaQuery(700)
  const imgs = ['/imgs/1.png', '/imgs/2.png', '/imgs/3.png']

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      style={{ minHeight: '50vh', maxHeigth: '80vh' }}
      className='flex w-full  justify-between '>
      {!isBreakpoint &&
        imgs &&
        imgs.map((img, i) => (
          <motion.div key={i} variants={item} className='h-full w-full bg-top px-0.5'>
            <img
              style={{
                maxHeight: '80vh',
              }}
              className='object-cover object-top w-auto h-full '
              src={img}
              alt={i}
            />
          </motion.div>
        ))}
      {isBreakpoint && imgs && (
        <Carousel
          swipeable
          autoPlay
          interval={3000}
          showStatus={false}
          showThumbs={false}
          emulateTouch
          infiniteLoop>
          {imgs.map((img, i) => (
            <img
              key={i}
              style={{
                maxHeight: '80vh',
              }}
              className='object-cover object-top w-auto h-full '
              src={img}
              alt={i}
            />
          ))}
        </Carousel>
      )}
    </motion.div>
  )
}
export default HomeImagesSection
