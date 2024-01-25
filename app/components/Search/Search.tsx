'use client'

import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FC } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


type Props = {
	roomTypeFilter: string
	searchQuery: string
	setRoomTypeFilter: (value: string) => void
	setSearchQuery: (value: string) => void
}

const Search: FC<Props> = ({
	roomTypeFilter,
	searchQuery,
	setRoomTypeFilter,
	setSearchQuery,
}): JSX.Element => {
	const router = useRouter()

	const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setRoomTypeFilter(event.target.value)
	}

	const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	//!  add the button search if need it
	// const handleFilterClick = () => {
	//   // router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);

	//   // automatic clear search query when user click search button
	//   // if (event.target.value.length === 0) {
	//   //   setSearchQuery('');
	//   // }
	//   router.push('/#Villa');
	// };

	return (
		<section className="mx-4 rounded-lg bg-tertiary-primary px-4 py-6 shadow-2xl">
			<div className="container mx-auto flex flex-wrap items-center justify-evenly gap-2">
				<div className="mb-4 w-full md:w-2/5">
					<Label className="text-xl">Villa Rooms</Label>
					<div className="relative">
						<select
							value={roomTypeFilter}
							onChange={handleRoomTypeChange}
							className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
						>
							{/* set default value to all */}
							<option value={'all'}>All</option>
							<option value="mini">Mini</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
						</select>
					</div>
				</div>

				<div className="mb-4 w-full md:w-2/5">
					<Label className="text-xl">Search</Label>
					<Input
						type="search"
						id="search"
						placeholder="Villa name..."
						value={searchQuery}
						onChange={handleSearchQueryChange}
					/>
				</div>
				{/* <div className='mb-4 w-full mt-6 md:w-1/4'>
          <Button
            size={'icon'}
            type='button'
            onClick={handleFilterClick}
            className='mx-auto w-full'
          >
            Search
          </Button>
        </div> */}
			</div>
		</section>
	)
}

export default Search
