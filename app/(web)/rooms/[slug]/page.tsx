/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client';

import useSWR from 'swr';

import { FeaturedImageGallery } from '@/app/components/FeatureIamgesGalery/FeatureIamgesGalery';
import SlugDetail from '@/app/components/RoomSlugDetail/SlugDetail';
import { getRoom } from '@/libs/apis';
import Head from 'next/head';
import { basename } from 'path';
import { generateMetadata } from './generateMetadata';
import LoadingSpinner from './loading';

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

  if (error) {
    throw new Error('Cannot fetch data');
  }

  if (!room && !isLoading) {
    throw new Error('Cannot fetch data');
  }

  if (!room) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>Detail Villa</title>
        <meta name='description' content={room.description} />
        <meta property='og:title' content={room.name} />
        <meta property='og:description' content={room.description} />
      </Head>
      <section className='mx-auto min-h-[100dvh] md:pt-20' id='slug-detail'>
        <FeaturedImageGallery photos={room.images} />
        <SlugDetail room={room} />
      </section>
    </>
  );
};

export default RoomDetails;
