const LoadingSpinner = () => (
  <div className='flex h-screen w-screen items-center justify-center bg-[#131313]'>
    <div className='grid gap-6'>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.16)]'>
        <div className='animate-loader-bounce absolute inset-y-0 h-full w-[--width] rounded-full bg-gradient-to-r from-sky-500 to-cyan-300' />
      </div>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.16)]'>
        <div className='animate-loader-infinite absolute inset-y-0 h-full w-[--width] rounded-full bg-gradient-to-r from-sky-500 to-cyan-300' />
      </div>
      <div className='relative h-3 w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 [--width:theme(spacing.8)]'>
        <div className='animate-loader-stretch absolute inset-y-0 h-full w-full rounded-full bg-sky-400' />
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
