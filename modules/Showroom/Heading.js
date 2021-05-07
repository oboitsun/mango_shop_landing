import Social from '../Social'
import Logo from '../Logo'
export default function Heading() {
  return (
    <div className='w-full flex px-5 py-10 items-center justify-between'>
      <div className='h-14'>
        <Logo />
      </div>
      <div>
        <Social />
      </div>
    </div>
  )
}
