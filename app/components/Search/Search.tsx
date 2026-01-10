"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import type { ChangeEvent, FC } from "react";
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
}): JSX.Element => {
	const router = useRouter();
	const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setRoomTypeFilter(event.target.value);
	};
	const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};
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
		<section className="mx-1 rounded-lg bg-tertiary-primary px-4 py-6 shadow-2xl">
			<div className="container mx-auto flex flex-wrap items-center justify-evenly gap-2">
				<div className="mb-4 w-full md:w-2/5">
					<Label className="text-xl">Loại Villa</Label>
					<div className="relative">
						<select
							value={roomTypeFilter}
							onChange={handleRoomTypeChange}
							className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
						>
							{/* set default value to all */}
							<option value="all">Tất cả</option>
							<option value="mini & 3">Mini & 3 phòng</option>
							<option value="4">4 phòng</option>
							<option value="5">5 phòng</option>
							<option value="6">6 phòng</option>
							<option value="7">7 phòng</option>
							<option value="8">8 phòng trở lên</option>
							<option value="9">Homestay</option>
							{/* <option value="10 & higher">10 phòng trở lên</option> */}
						</select>
					</div>
				</div>
				<div className="mb-4 w-full md:w-2/5">
					<Label className="text-xl">Tìm kiếm</Label>
					<Input
						type="search"
						id="search"
						placeholder="Tên Villa cần tìm..."
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
	);
};
export default Search;
