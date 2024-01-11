const LoadingSpinner = () => (
  <div className='flex h-screen w-screen items-center justify-center bg-[#131313]'>
    <div className='grid gap-6'>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.16)]'>
        <div className='absolute inset-y-0 h-full w-[--width] animate-loader-bounce rounded-full bg-gradient-to-r from-sky-500 to-cyan-300' />
      </div>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.16)]'>
        <div className='absolute inset-y-0 h-full w-[--width] animate-loader-infinite rounded-full bg-gradient-to-r from-sky-500 to-cyan-300' />
      </div>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.8)]'>
        <div className='absolute inset-y-0 h-full w-full animate-loader-stretch rounded-full bg-sky-400' />
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
