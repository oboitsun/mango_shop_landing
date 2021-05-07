import Link from 'next/link'

export default function Nav({ info }) {
  const { id, slug, city, street, location, floor, phone, worktime, weekends, imgs } = info

  return (
    <div className='header w-full h-12 flex justify-between items-center border-b px-5'>
      <div className='flex items-baseline '>
        <Link href='/'>
          <a className='pr-2 h-3 self-center'>
            <img className='h-3' src='/imgs/arrow_icon.svg' alt='back' />
          </a>
        </Link>
        <div className='uppercase font-semibold px-0.5'>{location}</div>
        <div className='text-sm text-gray-400'>{`${city}, ${street}, ${floor} этаж`}</div>
      </div>
      <div className='flex'>
        <div className='flex items-center pr-10'>
          <img className='pr-2 h-4' src='/imgs/phone_icon.svg' alt='phone' />
          <span className='leading-none'>{phone}</span>
        </div>
        <div className='flex items-center'>
          <img className='pr-2 h-4' src='/imgs/clock_icon.svg' alt='worktime' />
          <span className='leading-none'>
            {`${worktime[0]}:00 до ${worktime[1]}:00 ${
              weekends.length > 0
                ? `Выходные:${weekends.map((w) => <span>{w}</span>)}`
                : `(без выходных)`
            }
            `}
          </span>
        </div>
      </div>
    </div>
  )
}
