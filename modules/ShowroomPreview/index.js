import { showrooms } from '../../lib/data'
import { useState, useCallback, useEffect } from 'react'
import Content from './Content'

export default function ShowroomPreview({ showroom, i }) {
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
  const isBreakpoint = useMediaQuery(599)
  const odd = !!((i + 1) % 2)
  const img_block = (
    <div className='sm:w-full lg:w-5/12 '>
      <img className='w-auto' src={showroom.imgs[0]} alt='' />
    </div>
  )
  const content_block = (
    <div className='sm:w-full lg:w-7/12 px-10 flex '>
      <Content showroom={showroom} i={i} />
    </div>
  )
  const odd_flow = [img_block, content_block]
  const even_flow = [content_block, img_block]
  const block = (
    <div
      className={
        isBreakpoint
          ? 'w-full h-auto mb-10  flex flex-col transition-colors hover:bg-gray-50'
          : 'w-full h-auto mb-40  flex flex-row  transition-colors hover:bg-gray-50'
      }>
      {odd && odd_flow.map((b) => b)}
      {!isBreakpoint && !odd && even_flow.map((b) => b)}
      {isBreakpoint && !odd && odd_flow.map((b) => b)}
    </div>
  )

  return block
}
