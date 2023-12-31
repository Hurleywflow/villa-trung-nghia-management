// interface Props {
//   children: React.ReactNode;
// }

function SkewScroll() {
  return (
    <section>
      <div className='flex h-[50vh] w-screen items-center justify-center'>
        <div className='relative h-full w-full max-w-screen-lg overflow-hidden'>
          {/* <!-- For some reason the white vignette effect don't work in this sandbox but if you uncomment the following lines in VSCode, they should work --> */}
          <div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-white to-transparent' />
          <div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-white to-transparent' />
          <div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent' />
          <div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent' />
          <div className='mx-auto grid h-[250px] w-[500px] animate-skew-scroll grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2'>
            {/* <!-- These are all the same components - if you're using React, you can use a map to iterate through all of them --> */}
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all  hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
{/* avatar */}
              <div className='w-10 h-10 rounded bg-violet-600' ></div>
              <p className='text-gray-600'>Vila Name</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p className='text-gray-600'>Priority support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkewScroll;
