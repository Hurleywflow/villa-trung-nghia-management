import { Button } from '@/components/ui/button';
import Link from 'next/link';

/* eslint-disable react/react-in-jsx-scope */
const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();
	return (
		<footer className="p-0 relative m-0 w-full bg-slate-200 pt-2 text-center text-slate-950 dark:bg-foreground dark:text-slate-100">
			{/* <div className='absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/10%),transparent)]' />

			<div className='absolute size-full bg-[url(https://lunarui.dev/twitter/noise.png)] bg-[size:96px] bg-repeat opacity-[0.025]' />
			<div className='relative h-40 w-full'>
				<div className='absolute -top-1/2 size-full'>

					<div className='relative flex size-full items-center justify-center [--baseOpacity:1] [--baseSize:80px] [--duration:1.5s] [--opacityStep:0.05] [--scale:1.2] [--sizeStep:64px]'>

						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:0]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:1]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:2]' />
						<div className='ripple absolute rounded-full border border-dashed border-white/50 bg-white/5 [--i:3]' />
					</div>
				</div>
			</div> */}
			<small className="mb-2 block text-xs">
				Copyright &copy; {year} Villa Dalat TrungNghia. All rights reserved.
			</small>
			<p className="mb-3 text-xs">
				<span className="font-semibold">About this website:</span> Designed and
				built by
				<Link href="https://www.booking.com/Share-kNfSC9a" target="_blank">
					<Button variant="ghost" className="m-1 h-4 p-0 animate-pulse">
						HurleyNguyen
					</Button>
				</Link>
			</p>
			<Link href="https://www.agoda.com/villa-da-lat-tn1/hotel/dalat-vn.html?cid=1844104&ds=bkp7dksCVu7179H5" target="_blank">
				</Link>
			<Link href="https://www.booking.com/Share-0kLk7P" target="_blank">
				</Link>

		</footer>
	);
};
export default Footer;
