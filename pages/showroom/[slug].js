import { showrooms } from '../../lib/data'
import { useEffect } from 'react'
import Head from 'next/head'
import Nav from '../../modules/Showroom/Nav'
import Heading from '../../modules/Showroom/Heading'
import ImgSection from '../../modules/Showroom/ImgSection'
import Bio from '../../modules/Showroom/Bio'
import YTube from '../../modules/Showroom/YTube'
import { motion } from 'framer-motion'
const ShowRoom = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [])
  const { id, slug, city, street, location, floor, phone, worktime, weekends, imgs } = props
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>{`MANGO - ${location}`}</title>
      </Head>
      <Nav info={props} />
      <Heading />
      <ImgSection />
      <Bio />
      <YTube />
    </motion.div>
  )
}
export async function getStaticPaths() {
  return {
    paths: showrooms.map((showroom) => ({ params: { slug: showroom.slug } })),
    fallback: false, // See the "fallback" section below
  }
}
export async function getStaticProps(context) {
  const { params } = context

  return {
    props: showrooms.find((sh) => sh.slug === params.slug), // will be passed to the page component as props
  }
}

export default ShowRoom
