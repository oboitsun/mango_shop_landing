import Head from 'next/head'
import Link from 'next/link'
import Logo from '../modules/Logo'
import Social from '../modules/Social'
import HomeImagesSection from '../modules/HomeImagesSection'
import About from '../modules/About'
import ShowroomPreview from '../modules/ShowroomPreview/'
import { showrooms } from '../lib/data'
import { motion } from 'framer-motion'
import Testing from '../modules/Testing'
const TestingPage = () => {
  const test = Testing
  return test
}
const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>MANGO</title>
      </Head>
      <div className='w-full'>
        <div className='flex w-full   flex-col items-center m-auto '>
          <div className='pt-20 pb-14'>
            <Logo />
          </div>
          <div className='pb-20'>
            <Social />
          </div>
          <div className='pb-20'>
            <HomeImagesSection />
          </div>

          <div className='showrooms max-w-7xl flex flex-col w-full'>
            <div className='pb-20'>
              <About />
            </div>

            {showrooms.map((sh, i) => (
              <Link
                key={i}
                className='w-full'
                scroll={false}
                href={{
                  pathname: '/showroom/[slug]',
                  query: { slug: sh.slug },
                }}>
                <a>
                  <ShowroomPreview showroom={sh} i={i} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
