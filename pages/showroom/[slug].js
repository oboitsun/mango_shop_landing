import { showrooms } from '../../lib/data'
import Head from 'next/head'
import Social from '../../modules/Social'
export default function ShowRoom(props) {
  const { city, street, location, imgs } = props
  return (
    <>
      <Head>
        <title>{`MANGO - ${location}`}</title>
      </Head>
      <div className='w-full max-w-5xl  flex flex-col  items-center m-auto'>
        <img className='h-80 w-auto object-fit' alt={location} src={imgs[0]} />
        <div className=' w-full h-auto  flex flex-col justify-center items-center transition-all'>
          <div>{location}</div>
          <div>{city}</div>
          <div>{street}</div>
          <Social />
        </div>
      </div>
    </>
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
