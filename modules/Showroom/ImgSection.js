import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function ImgSection() {
  const imgs = ['/imgs/1.png', '/imgs/2.png', '/imgs/3.png']
  return (
    <Carousel
      swipeable
      autoPlay
      interval={5000}
      showStatus={false}
      showThumbs={false}
      emulateTouch
      infiniteLoop>
      {imgs.map((img, i) => (
        <img
          key={i}
          style={{
            maxHeight: '70vh',
          }}
          className='object-cover object-top w-full h-auto '
          src={img}
          alt={i}
        />
      ))}
    </Carousel>
  )
}

export default ImgSection
