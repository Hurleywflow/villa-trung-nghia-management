/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import useSWR from 'swr';

import RoomCard from '@/app/components/RoomCard/RoomCard';
import Search from '@/app/components/Search/Search';
import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import LoadingSpinner from './loading';

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('searchQuery');
    const roomType = searchParams.get('roomType');

    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData);
  if (error) throw new Error('Cannot fetch data');
  if (typeof data === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  // this is Next js specific code to check if the code is running on the client or server
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [data]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  //items per a page
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Filter the rooms function
  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      // Apply room type filter
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== 'all' &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }
      //   Apply search query filter
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };
  const filteredRooms = filterRooms(data ?? []);
  // const filteredRooms = filterRooms(data || []);
  const currentPosts = filterRooms(data ?? []).slice(
    firstPostIndex,
    lastPostIndex,
  );

  return (
    <section className='min-h-screen bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400'>
      {isClient ? (
        <div
          className='bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400'
          id='Villa'
        >
          <div className='container mx-auto pt-10'>
            <Search
              roomTypeFilter={roomTypeFilter}
              searchQuery={searchQuery}
              setRoomTypeFilter={setRoomTypeFilter}
              setSearchQuery={setSearchQuery}
            />
          </div>
          {/* display all Vila cards */}
          <div className='container mx-auto flex flex-row flex-wrap items-center justify-evenly'>
            {/* {filteredRooms.map((room) => ( */}
            {currentPosts.map((room: Room) => (
              <div key={room._id}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
          {/* pagination */}
          <PaginationSection
            totalPosts={filterRooms.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default Rooms;

function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalPosts: any;
  postsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePrevPage()} />
          </PaginationItem>

          {pages.map((page, idx) => (
            <PaginationItem
              key={idx}
              className={
                currentPage === page ? 'rounded-md bg-neutral-100' : ''
              }
            >
              <PaginationLink onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext onClick={() => handleNextPage()} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
