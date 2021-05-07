import { motion } from 'framer-motion'
function Social() {
  return (
    <motion.div className='w-full flex items-center h-10 justify-center '>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='w-full flex items-center h-10 justify-center '>
        <a className='w-auto   mx-2' href='/'>
          <svg
            width='32'
            height='33'
            viewBox='0 0 32 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.0003 3.69147C8.66699 3.69147 2.66699 9.64776 2.66699 16.9837C2.66699 23.6165 7.54699 29.1218 13.9203 30.1167V20.8307H10.5337V16.9837H13.9203V14.052C13.9203 10.7223 15.907 8.89161 18.9603 8.89161C20.4137 8.89161 21.9337 9.14366 21.9337 9.14366V12.4203H20.2537C18.6003 12.4203 18.0803 13.4417 18.0803 14.4897V16.9837H21.787L21.187 20.8307H18.0803V30.1167C21.2222 29.623 24.0833 28.028 26.1469 25.6197C28.2105 23.2114 29.3408 20.1484 29.3337 16.9837C29.3337 9.64776 23.3337 3.69147 16.0003 3.69147Z'
              fill='black'
            />
          </svg>
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='w-full flex items-center h-10 justify-center '>
        <a className='w-auto   mx-2' href='/'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.40033 0.638428H19.6003C23.867 0.638428 27.3337 4.0875 27.3337 8.33252V19.4757C27.3337 21.5163 26.5189 23.4733 25.0686 24.9162C23.6183 26.3592 21.6513 27.1698 19.6003 27.1698H8.40033C4.13366 27.1698 0.666992 23.7207 0.666992 19.4757V8.33252C0.666992 6.29192 1.48175 4.3349 2.93203 2.89198C4.38231 1.44905 6.34932 0.638428 8.40033 0.638428ZM8.13366 3.29156C6.86062 3.29156 5.63972 3.79471 4.73955 4.69032C3.83937 5.58593 3.33366 6.80063 3.33366 8.06721V19.741C3.33366 22.3809 5.48033 24.5167 8.13366 24.5167H19.867C21.14 24.5167 22.3609 24.0135 23.2611 23.1179C24.1613 22.2223 24.667 21.0076 24.667 19.741V8.06721C24.667 5.42734 22.5203 3.29156 19.867 3.29156H8.13366ZM21.0003 5.28142C21.4424 5.28142 21.8663 5.45612 22.1788 5.76709C22.4914 6.07807 22.667 6.49984 22.667 6.93963C22.667 7.37941 22.4914 7.80118 22.1788 8.11216C21.8663 8.42313 21.4424 8.59784 21.0003 8.59784C20.5583 8.59784 20.1344 8.42313 19.8218 8.11216C19.5093 7.80118 19.3337 7.37941 19.3337 6.93963C19.3337 6.49984 19.5093 6.07807 19.8218 5.76709C20.1344 5.45612 20.5583 5.28142 21.0003 5.28142ZM14.0003 7.27127C15.7684 7.27127 17.4641 7.97008 18.7144 9.21398C19.9646 10.4579 20.667 12.145 20.667 13.9041C20.667 15.6632 19.9646 17.3503 18.7144 18.5942C17.4641 19.8381 15.7684 20.5369 14.0003 20.5369C12.2322 20.5369 10.5365 19.8381 9.28628 18.5942C8.03604 17.3503 7.33366 15.6632 7.33366 13.9041C7.33366 12.145 8.03604 10.4579 9.28628 9.21398C10.5365 7.97008 12.2322 7.27127 14.0003 7.27127ZM14.0003 9.9244C12.9395 9.9244 11.922 10.3437 11.1719 11.09C10.4218 11.8364 10.0003 12.8486 10.0003 13.9041C10.0003 14.9596 10.4218 15.9718 11.1719 16.7182C11.922 17.4645 12.9395 17.8838 14.0003 17.8838C15.0612 17.8838 16.0786 17.4645 16.8288 16.7182C17.5789 15.9718 18.0003 14.9596 18.0003 13.9041C18.0003 12.8486 17.5789 11.8364 16.8288 11.09C16.0786 10.3437 15.0612 9.9244 14.0003 9.9244Z'
              fill='black'
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Social
