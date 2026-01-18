/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, useInView } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import useSWR from 'swr'

import BottomBarBooking from '@/app/components/BottomBarBooking/BottomBarBooking'
import RoomCard from '@/app/components/RoomCard/RoomCard'
import Search from '@/app/components/Search/Search'
import SectionHeading from '@/app/components/TextSectionHeading/SectionHeading'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { getRooms } from '@/libs/apis'
import type { Room } from '@/models/room'
import LoadingSpinner from './loading'
// import { Award } from 'lucide-react';

async function fetchData() {
	return await getRooms()
}
const Rooms = () => {
	const [roomTypeFilter, setRoomTypeFilter] = useState('')
	const [searchQuery, setSearchQuery] = useState('')
	const searchParams = useSearchParams()

	useEffect(() => {
		const searchQuery = searchParams.get('searchQuery')
		const roomType = searchParams.get('roomType')

		if (roomType) setRoomTypeFilter(roomType)
		if (searchQuery) setSearchQuery(searchQuery)
	}, [searchParams])


	const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData)
	if (error) throw new Error('Cannot fetch data')
	if (typeof data === 'undefined' && !isLoading)
		throw new Error('Cannot fetch data')

	// this is Next js specific code to check if the code is running on the client or server
	const [isClient, setIsClient] = useState(false)
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsClient(true)
	}, [data])

	// pagination
	const [currentPage, setCurrentPage] = useState(1)
	//items per a page
	const [postsPerPage, _setPostsPerPage] = useState(36)
	const lastPostIndex = currentPage * postsPerPage
	const firstPostIndex = lastPostIndex - postsPerPage

	// Filter the rooms function
	const filterRooms = (rooms: Room[]) => {
		return rooms.filter((room) => {
			// Apply room type filter
			if (
				roomTypeFilter &&
				roomTypeFilter.toLowerCase() !== 'all' &&
				room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
			) {
				return false
			}
			//   Apply search query filter
			if (
				searchQuery &&
				!room.name.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				return false
			}

			return true
		})
	}
	const _filteredRooms = filterRooms(data ?? [])
	// const filteredRooms = filterRooms(data || []);
	const currentPosts = filterRooms(data ?? []).slice(
		firstPostIndex,
		lastPostIndex,
	)

	const ref = useRef(null)
	const isInView = useInView(ref)

	return (
		<section className="mx-auto min-h-fit" ref={ref}>
			{/* <section className='mx-auto mt-[5dvh] min-h-fit' ref={ref}> */}
			<div
				style={{
					// transform: isInView ? 'none' : 'translateY(-50px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.1s ease-in-out',
				}}
			>
				{isInView ? <BottomBarBooking /> : null}
			</div>
			{isClient ? (
				<div className=" " id="Villa">
					<div className="pt-10">
						<SectionHeading>Booking</SectionHeading>
						<Search
							roomTypeFilter={roomTypeFilter}
							searchQuery={searchQuery}
							setRoomTypeFilter={setRoomTypeFilter}
							setSearchQuery={setSearchQuery}
						/>
					</div>
					{/* display all Vila cards */}
					<div className="group mx-1 my-5 grid grid-cols-2 place-content-evenly gap-2 p-0 md:grid-cols-4 md:gap-3 lg:grid-cols-6">
						{/* <div className="group mx-1 my-5 grid grid-cols-2 place-content-evenly gap-4 p-0 md:grid-cols-4 md:gap-4 lg:grid-cols-6"> */}
						{/* {filteredRooms.map((room) => ( */}
						{currentPosts.map((room: Room, index: number) => (
							// stagger animation for each card
							<motion.div
								key={room._id}
								initial={{
									opacity: 0,
									translateX: -50,
									translateY: -50,
									scale: 0.3,
								}}
								animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1 }}
								transition={{ duration: 0.05, delay: 0.05 + index * 0.05 }}
								// whileTap={{ opacity: 0.8 }}
								//! make all another cards are blur when hover a card
								// className=' hover:!blur-none group-hover:blur-[1px]'
							>
								<RoomCard room={room} />
							</motion.div>
						))}
					</div>
					{/* pagination */}
					<div className="mt-5 block w-full ">
						<PaginationSection
							totalPosts={filterRooms.length}
							postsPerPage={postsPerPage}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	)
}

export default Rooms

function PaginationSection({
	totalPosts,
	postsPerPage,
	currentPage,
	setCurrentPage,
}: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	totalPosts: any
	postsPerPage: any
	currentPage: any
	setCurrentPage: any
}) {
	const pages = []
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i)
	}
	const handleNextPage = () => {
		if (currentPage < pages.length) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	return (
		<div>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious onClick={() => handlePrevPage()} />
					</PaginationItem>

					{pages.map((page, idx) => (
						<PaginationItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
	)
}
