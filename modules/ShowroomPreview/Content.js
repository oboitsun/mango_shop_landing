export default function Content({ showroom, i }) {
  const { city, street, location, imgs, floor, worktime, phone, weekends } = showroom
  return (
    <div className='w-auto  flex flex-col  items-start'>
      <div className='uppercase sm:text-2xl  md:text-lg lg:text-2xl'>{`Магазин №${i + 1}`}</div>
      <div className='uppercase sm:text-2xl md:text-2xl lg:text-6xl font-semibold py-10'>
        {location}
      </div>
      <div className='flex sm:text-2xl  md:text-lg  lg:text-2xl '>
        {city},{street}
      </div>
      <div className='sm:text-xl md:text-md lg:text-2xl'>{`${floor} этаж`}</div>
      <div className='sm:text-xl md:text-md lg:text-2xl'>{`Телефон: ${phone}`}</div>
      <div className='sm:text-xl md:tex-md lg:text-2xl'>{`Время работы: с ${worktime[0]}:00 до ${
        worktime[1]
      }:00 ${weekends.length === 0 && '(без выходных)'}`}</div>
    </div>
  )
}
