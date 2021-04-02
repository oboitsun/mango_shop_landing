import Head from 'next/head'
import Link from 'next/link'
import Logo from '../modules/logo'
import Social from '../modules/Social'
import HomeImagesSection from '../modules/HomeImagesSection'
import About from '../modules/About'
import ShowroomPreview from '../modules/ShowroomPreview/'
import { showrooms } from '../lib/data'
export default function Home() {
  return (
    <>
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
                key={sh.id}
                href={{
                  pathname: '/showroom/[slug]',
                  query: { slug: sh.slug },
                }}>
                <a className='w-full'>
                  <ShowroomPreview showroom={sh} i={i} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
