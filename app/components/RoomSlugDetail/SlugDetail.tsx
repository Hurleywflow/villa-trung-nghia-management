import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { urlFor } from "@/libs/urlFor";
import type { Room } from "@/models/room";
import { useInView } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import BottomBarBooking from "../BottomBarBooking/BottomBarBooking";
import ProfileForm from "../FormBooking/Form";

interface SlugProps {
	room: Room;
}

function SlugDetail({ room }: SlugProps) {
	const ref = React.useRef(null);
	const isInView = useInView(ref);
	const [open, setOpen] = React.useState(false);
	const [snap, setSnap] = React.useState<number | string | null>(0.7);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
		return (
			<section className="px-4 py-6 sm:p-6 md:px-8 md:py-10" ref={ref}>
				<div
					style={{
						// transform: isInView ? 'none' : 'translateY(-50px)',
						opacity: isInView ? 1 : 0,
						transition: "all 0.3s ease-in-out",
					}}
					className="flex items-center justify-center"
				>
					{isInView ? <BottomBarBooking /> : null}
				</div>
				<div className=" grid max-w-6xl grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-20">
					<div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg  p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
						<p className="text-sm font-medium leading-4 text-tertiary-primary shadow-tertiary-primary text-shadow-lg ">
							$: {room.price} VND
						</p>
						<p className="text-sm font-medium leading-4 text-tertiary-primary shadow-tertiary-primary text-shadow-lg ">
							{room.type === "mini & 3" ? "Mini & 3 phòng" : `${room.type} phòng`}
						</p>
						<h1 className="mt-1 text-lg font-semibold text-slate-900 shadow-tertiary-primary text-shadow-lg  md:text-2xl">
							{room.name.toUpperCase()}
						</h1>
					</div>
					<div className="col-start-1 col-end-3 row-start-1 hidden gap-4 sm:mb-6 sm:grid-cols-4 md:grid lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6">
						<div className="relative h-60 w-full overflow-hidden rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full">
							<Image
								alt={room.name}
								src={urlFor(room.coverImage).url()}
								// width={500}
								// height={500}
								fill
								sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw"
								// Static images
								// placeholder='blur'
								className="img scale-animation rounded-lg object-cover object-center "
							/>
						</div>

						{room.images.map((image, index) => (
							<div
								className="relative hidden h-52 w-full overflow-hidden rounded-lg sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
								key={index}
							>
								<Image
									alt={room.name}
									src={urlFor(image).url()}
									// width={500}
									// height={500}
									fill
									sizes="50vw"
									// Static images
									// placeholder='blur'
									className="img scale-animation rounded-lg object-cover object-center "
								/>
							</div>
						))}
					</div>
					<div className="row-start-2 mt-4 flex items-center gap-5 text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
						<div className="flex items-center">
							<svg
								width={2}
								height={2}
								aria-hidden="true"
								fill="currentColor"
								className="mx-3 text-slate-300"
							>
								<circle cx={1} cy={1} r={1} />
							</svg>
							<svg
								width={24}
								height={24}
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="mr-1 text-slate-400 "
								aria-hidden="true"
							>
								<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
								<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
							</svg>
							Dalat City.
						</div>
						{/* bed font awesome */}
						<div className="grid grid-cols-2">
							{room.offeredAmenities?.map((amenity) => (
								<div
									key={amenity._key}
									className="my-1 flex items-center md:my-0"
								>
									<i>
										{amenity.icon === "w" ? (
											<svg
												width="15px"
												height="15px"
												viewBox="0 -2 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
											>
												<title>wifi [#1018]</title>
												<desc>Created with Sketch.</desc>
												<defs />
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-60.000000, -3681.000000)"
														fill="#000000"
													>
														<g
															id="icons"
															transform="translate(56.000000, 160.000000)"
														>
															<path
																d="M11.9795939,3535.00003 C11.9795939,3536.00002 12.8837256,3537 14,3537 C15.1162744,3537 16.0204061,3536.00002 16.0204061,3535.00003 C16.0204061,3532.00008 11.9795939,3532.00008 11.9795939,3535.00003 M9.71370846,3530.7571 L11.1431458,3532.17208 C12.7180523,3530.6121 15.2819477,3530.6121 16.8568542,3532.17208 L18.2862915,3530.7571 C15.9183756,3528.41413 12.0816244,3528.41413 9.71370846,3530.7571 M4,3525.10019 L5.42842711,3526.51516 C10.1551672,3521.83624 17.8448328,3521.83624 22.5715729,3526.51516 L24,3525.10019 C18.4772199,3519.63327 9.52278008,3519.63327 4,3525.10019 M21.1431458,3527.92914 L19.7147187,3529.34312 C16.5638953,3526.22417 11.4361047,3526.22417 8.28528134,3529.34312 L6.85685423,3527.92914 C10.8016971,3524.0242 17.1983029,3524.0242 21.1431458,3527.92914"
																id="wifi-[#1018]"
															/>
														</g>
													</g>
												</g>
											</svg>
										) : (
											""
										)}
									</i>
									<p className="ml-2 text-xs">{amenity.amenity}</p>
								</div>
							))}
						</div>
					</div>
					<div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6 ">
						<Dialog open={open} onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<Button type="button" size="lg">
									Booking Now
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Booking</DialogTitle>
									<DialogDescription>
										Khi bạn đã sẵn sàng đặt phòng biệt thự này, vui lòng
										điền vào form dưới đây.
									</DialogDescription>
								</DialogHeader>
								<ProfileForm className="px-4" />
							</DialogContent>
						</Dialog>
						{/* <Link
            className='scale-animation-small inline-flex items-center md:mb-2 lg:mb-0'
            href={'/rooms'}
          >
            <Button type='button' className='ml-28' variant='outline' size='lg'>
              Go Back
            </Button>
          </Link> */}
					</div>
					<p className="col-start-1 mt-4 text-base  leading-6  sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
						{room.description.split("\n").map((item, key) => {
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<span key={key}>
									{item}
									<br />
								</span>
							);
						})}
					</p>
				</div>
			</section>
		);
	}
	return (
		<section className="px-4 py-6 sm:p-6 md:px-8 md:py-10" ref={ref}>
			<div
				style={{
					// transform: isInView ? 'none' : 'translateY(-50px)',
					opacity: isInView ? 1 : 0,
					transition: "all 0.3s ease-in-out",
				}}
				className="flex items-center justify-center"
			>
				{isInView ? <BottomBarBooking /> : null}
			</div>
			<div className=" grid max-w-6xl grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-20">
				<div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg  p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
					<p className="text-sm font-medium leading-4 text-tertiary-primary shadow-tertiary-primary text-shadow-lg  ">
						$: {room.price} VND
					</p>
					<p className="text-sm font-medium leading-4 text-tertiary-primary shadow-tertiary-primary text-shadow-lg  ">
						{room.type === "mini & 3" ? "Mini & 3 phòng" : `${room.type} phòng`}
					</p>
					<h1 className="mt-1 text-lg font-semibold text-slate-900 shadow-tertiary-primary text-shadow-lg  md:text-2xl">
						{room.name.toUpperCase()}
					</h1>
				</div>
				<div className="col-start-1 col-end-3 row-start-1 hidden gap-4 sm:mb-6 sm:grid-cols-4 md:grid lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6">
					<div className="relative h-60 w-full overflow-hidden rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full">
						<Image
							alt={room.name}
							src={urlFor(room.coverImage).url()}
							// width={500}
							// height={500}
							fill
							sizes="30vw"
							// Static images
							// placeholder='blur'
							className="img scale-animation rounded-lg object-cover object-center "
						/>
					</div>

					{room.images.map((image, index) => (
						<div
							className="relative hidden h-52 w-full overflow-hidden rounded-lg sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
							key={index}
						>
							<Image
								key={index}
								alt={room.name}
								src={urlFor(image).url()}
								// width={500}
								// height={500}
								fill
								sizes="30vw"
								// Static images
								// placeholder='blur'
								className="img scale-animation rounded-lg object-cover object-center "
							/>
						</div>
					))}
				</div>
				<div className="row-start-2 mt-4 flex items-center gap-5 text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
					<div className="flex items-center">
						<svg
							width={2}
							height={2}
							aria-hidden="true"
							fill="currentColor"
							className="mx-3 text-slate-300"
						>
							<circle cx={1} cy={1} r={1} />
						</svg>
						<svg
							width={24}
							height={24}
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-1 text-slate-400 "
							aria-hidden="true"
						>
							<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
							<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
						</svg>
						Dalat City.
					</div>
					{/* bed font awesome */}
					<div className="grid grid-cols-2">
						{room.offeredAmenities?.map((amenity) => (
							<div
								key={amenity._key}
								className="my-1 flex items-center md:my-0"
							>
								<i>
									{amenity.icon === "w" ? (
										<svg
											width="15px"
											height="15px"
											viewBox="0 -2 20 20"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<title>wifi [#1018]</title>
											<desc>Created with Sketch.</desc>
											<defs></defs>
											<g
												id="Page-1"
												stroke="none"
												stroke-width="1"
												fill="none"
												fill-rule="evenodd"
											>
												<g
													id="Dribbble-Light-Preview"
													transform="translate(-60.000000, -3681.000000)"
													fill="#000000"
												>
													<g
														id="icons"
														transform="translate(56.000000, 160.000000)"
													>
														<path
															d="M11.9795939,3535.00003 C11.9795939,3536.00002 12.8837256,3537 14,3537 C15.1162744,3537 16.0204061,3536.00002 16.0204061,3535.00003 C16.0204061,3532.00008 11.9795939,3532.00008 11.9795939,3535.00003 M9.71370846,3530.7571 L11.1431458,3532.17208 C12.7180523,3530.6121 15.2819477,3530.6121 16.8568542,3532.17208 L18.2862915,3530.7571 C15.9183756,3528.41413 12.0816244,3528.41413 9.71370846,3530.7571 M4,3525.10019 L5.42842711,3526.51516 C10.1551672,3521.83624 17.8448328,3521.83624 22.5715729,3526.51516 L24,3525.10019 C18.4772199,3519.63327 9.52278008,3519.63327 4,3525.10019 M21.1431458,3527.92914 L19.7147187,3529.34312 C16.5638953,3526.22417 11.4361047,3526.22417 8.28528134,3529.34312 L6.85685423,3527.92914 C10.8016971,3524.0242 17.1983029,3524.0242 21.1431458,3527.92914"
															id="wifi-[#1018]"
														></path>
													</g>
												</g>
											</g>
										</svg>
									) : (
										""
									)}
								</i>
								<p className="ml-2 text-xs">{amenity.amenity}</p>
							</div>
						))}
					</div>
				</div>
				<div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6 ">
					<Drawer
						open={open}
						onOpenChange={setOpen}
						snapPoints={[0.7, 1]}
						// snapPoints={[0.5, 0.8, 1]}
						activeSnapPoint={snap}
						setActiveSnapPoint={setSnap}
					>
						<DrawerTrigger asChild>
							<Button type="button" size="lg">
								Booking Now
							</Button>
						</DrawerTrigger>
						<DrawerContent>
							<div
								className={cn("", {
									"overflow-y-auto": snap === 1,
									"overflow-hidden": snap !== 1,
								})}
							>
								<DrawerHeader className="text-left">
									<DrawerTitle>Booking</DrawerTitle>
									<DrawerDescription>
										When you are ready to book this Vila, please fill the form
										below.
									</DrawerDescription>
								</DrawerHeader>
								<ProfileForm className="px-4" />
								<DrawerFooter className="pt-2">
									<DrawerClose asChild>
										<Button variant="outline">Cancel</Button>
									</DrawerClose>
								</DrawerFooter>
							</div>
						</DrawerContent>
					</Drawer>
					{/* <Link
            className='scale-animation-small inline-flex items-center md:mb-2 lg:mb-0'
            href={'/rooms'}
          >
            <Button type='button' className='ml-28' variant='outline' size='lg'>
              Go Back
            </Button>
          </Link> */}
				</div>
				<p className="col-start-1 mt-4 text-base leading-6  sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
					{room.description.split("\n").map((item, key) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<span key={key}>
								{item}
								<br />
							</span>
						);
					})}
				</p>
			</div>
		</section>
	);
}

export default SlugDetail;
