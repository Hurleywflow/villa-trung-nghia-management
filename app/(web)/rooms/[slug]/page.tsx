/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client';

import dynamic from 'next/dynamic';
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { basename } from 'path';
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import Head from 'next/head';
import useSWR from 'swr';

import SlugDetail from '@/app/components/RoomSlugDetail/SlugDetail';
import { Container } from '@/app/components/container';
import { getRoom } from '@/libs/apis';
import { generateMetadata } from './generateMetadata';
import LoadingSpinner from './loading';
import { Suspense } from 'react';
import Loading from '@/app/components/loading/Loading';

const FeaturedImageGallery = dynamic(
	async () =>
		(await import('@/app/components/FeatureIamgesGalery/FeatureIamgesGalery'))
			.default,
	{
		ssr: true,
	},
);

// use basename to get pathname slug
function getValidSlug() {
	try {
		const slug = basename(window.location.pathname);
		if (!slug) {
			throw new Error('Invalid slug');
		}
		return slug;
	} catch (error) {
		console.error(error);
		return null;
	}
}

try {
	const slugName = getValidSlug();
	if (slugName) {
		generateMetadata(slugName);
	}
} catch (error) {
	console.error(error);
}

const RoomDetails = (props: { params: { slug: string } }) => {
	const {
		params: { slug },
	} = props;

	const fetchRoom = async () => {
		try {
			return await getRoom(slug);
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	const { data: room, error, isLoading } = useSWR('/api/room', fetchRoom);

	// const slugNameVilla = room?.slug?.current;
	// if (slug !== slugNameVilla) {
	//   return NotFound();
	// }

	if (isLoading) {
		return <LoadingSpinner />;
	}
	if (!room) {
		return <LoadingSpinner />;
	}

	if (!room && !isLoading) {
		throw new Error('Cannot fetch data');
	}
	if (error) {
		throw new Error('Cannot fetch data');
	}

	return (
		<>
			<Head>
				<title>Detail Villa</title>
				<meta name='description' content={room.description} />
				<meta property='og:title' content={room.name} />
				<meta property='og:description' content={room.description} />
			</Head>
			<Container>
				<section
					className='mx-auto md:pt-20 flex items-center justify-center flex-col'
					id='slug-detail'
				>
					{room && (
						<Suspense
							fallback={
								<Loading className='w-screen max-w-screen-2xl overflow-hidden md:w-[90vw] aspect-square md:aspect-video' />
							}
						>
							<FeaturedImageGallery
								photos={room.images}
								isLoading={isLoading}
							/>
						</Suspense>
					)}
					{room && <SlugDetail room={room} />}
				</section>
			</Container>
		</>
	);
};

export default RoomDetails;
