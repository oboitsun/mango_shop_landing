import Link from 'next/link'
export default function Logo() {
  return (
    <div className=' w-96 h-full'>
      <Link href='/'>
        <a>
          <img className='h-full' src='/mango.svg' alt='logo' />
        </a>
      </Link>
    </div>
  )
}
