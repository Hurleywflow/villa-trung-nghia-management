'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import RoomCard from '@/app/components/RoomCard/RoomCard';
import Search from '@/app/components/Search/Search';
import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';

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

  const filteredRooms = filterRooms(data || []);

  return (
    <section className='mt-20 bg-gray-50'>
      <div className='container mx-auto pt-10'>
        <Search
          roomTypeFilter={roomTypeFilter}
          searchQuery={searchQuery}
          setRoomTypeFilter={setRoomTypeFilter}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className='container mx-auto flex flex-row flex-wrap items-center justify-evenly'>
        {filteredRooms.map((room) => (
          <div key={room._id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
