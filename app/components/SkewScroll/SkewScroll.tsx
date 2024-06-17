/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { getRooms } from '@/libs/apis';
import { urlFor } from '@/libs/urlFor';
// interface Props {
//   children: React.ReactNode;
// }
import Image from 'next/image';
import type {
	JSXElementConstructor,
	Key,
	PromiseLikeOfReactNode,
	ReactElement,
	ReactNode,
	ReactPortal,
} from 'react';
import useSWR from 'swr';
function SkewScroll() {
	async function fetchData() {
		return getRooms();
	}

	const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData);
	if (error) throw new Error('Cannot fetch data');
	if (typeof data === 'undefined' && !isLoading)
		throw new Error('Cannot fetch data');
	return (
		<section className='mx-auto flex max-w-screen-2xl items-center justify-center '>
			<div className='max-w-screen-2xl flex h-[50vh] items-center justify-center '>
				<div className='relative h-full w-screen max-w-screen-2xl overflow-hidden bg-slate-100'>
					{/* <!-- For some reason the white vignette effect don't work in this sandbox but if you uncomment the following lines in VSCode, they should work --> */}
					<div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-slate-100 to-transparent' />
					<div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-slate-100 to-transparent' />
					<div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-slate-100 to-transparent' />
					<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-slate-100 to-transparent' />
					<div className='mx-auto grid h-[200px] md:w-[800px] animate-skew-scroll grid-cols-2 gap-5 md:gap-10 hover:[animation-play-state:paused] w-[400px] md:grid-cols-3'>
						{/* <!-- These are all the same components - if you're using React, you can use a map to iterate through all of them --> */}
						{/* map over the data and render a component for each item --> */}
						{data?.map(
							(
								item: {
									_id: Key | null | undefined;
									// biome-ignore lint/suspicious/noExplicitAny: <explanation>
									coverImage: any;
									name:
										| string
										| number
										| boolean
										// biome-ignore lint/suspicious/noExplicitAny: <explanation>
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| PromiseLikeOfReactNode
										| null
										| undefined;
								},
								// biome-ignore lint/suspicious/noExplicitAny: <explanation>
								i: any,
							) => (
								<div
									key={item._id}
									className=' flex cursor-pointer items-center space-x-4 rounded-md border border-gray-100 p-1  shadow-md transition-all ease-linear hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl '
								>
									{/* avatar */}
									<div className='relative h-14 w-14 overflow-hidden rounded-sm bg-violet-600 shadow-sm'>
										<Image
											alt='villa'
											src={urlFor(item.coverImage).url()}
											// width={500}
											// height={500}
											fill
											sizes='80px'
											className='img scale-animation object-cover object-center'
										/>
									</div>
									<p className=' shadow-tertiary-primary text-shadow-sm'>
										{item.name}
									</p>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SkewScroll;
