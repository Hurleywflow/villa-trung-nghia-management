function HeroText() {
  return (
    <div>
      {' '}
      <div className='window-mask flex flex-col rounded-3xl bg-white p-12 md:flex-row'>
        <div className='flex h-full flex-col'>
          <h1 className='mb-5 max-w-[12ch] text-4xl font-bold leading-[0.85] md:my-auto md:text-[80px] xl:text-[128px]'>
            Playing with masks and Framer Motion.
          </h1>
          <p className='text-lg md:text-3xl'>
            This animation is inspired by the Runway.com homepage. <br />
            Recreated by frontend.fyi.
          </p>
        </div>
        <div className='mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full border-[4px] border-gray-300 md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]' />
      </div>
    </div>
  );
}

export default HeroText;
