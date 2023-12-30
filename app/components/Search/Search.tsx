'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className='rounded-lg bg-purple-200 px-4 py-6'>
      <div className='container mx-auto flex flex-wrap items-center justify-evenly gap-2'>
        <div className='mb-4 w-full md:w-1/4'>
          <Label>Room Type</Label>
          <div className='relative'>
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className='w-full rounded px-4 py-2 capitalize leading-tight focus:outline-none dark:bg-black'
            >
              {/* set default value to all */}
              <option value='all' selected>
                All
              </option>
              <option value='mini'>Mini</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
            </select>
          </div>
        </div>

        <div className='mb-4 w-full md:w-1/4'>
          <Label className=''>Search</Label>
          <Input
            type='search'
            id='search'
            placeholder='Search...'
            className='w-full rounded px-4 py-3 leading-tight placeholder:text-black focus:outline-none dark:bg-black dark:placeholder:text-white'
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className='mb-4 w-full md:w-1/4 md:mt-6'>
          <Button
            size={'sm'}
            type='button'
            onClick={handleFilterClick}
            className='mx-auto w-full'
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Search;
