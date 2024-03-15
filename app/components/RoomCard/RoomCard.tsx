import Image from "next/image";

import Link from "next/link";
import type { FC } from "react";
import * as React from "react";

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
import ProfileForm from "../FormBooking/Form";

type Props = {
	room: Room;
};

const RoomCard: FC<Props> = (props) => {
	const {
		room: { coverImage, name, code, type, description, slug, isBooked, price },
	} = props;
	const [snap, setSnap] = React.useState<number | string | null>(0.7);
	const [open, setOpen] = React.useState(false);

	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
		return (
			<section className="body-font mx-auto w-full   transition-all duration-100 hover:scale-[1.01]">
				{!isBooked ? (
					<div className="group  rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-tertiary-primary hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 ">
						<div className="w-ful relative h-full rounded-lg bg-gray-50">
							{/* <!-- Top Right --> */}
							{/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
							<div className="absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm">
								<div className="absolute left-0 top-0 h-2 w-2 bg-orange-800" />
								<div className="absolute bottom-0 right-0 h-2 w-2 bg-orange-800" />
								<Dialog open={open} onOpenChange={setOpen}>
									<DialogTrigger asChild>
										<div className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-primary py-1.5  text-center text-sm font-semibold uppercase tracking-wider text-slate-200 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-tertiary-primary hover:text-white">
											{isBooked ? "Booked" : "Book Now"}
										</div>
									</DialogTrigger>
									<DialogContent className="sm:max-w-[425px]">
										<DialogHeader>
											<DialogTitle>Booking</DialogTitle>
											<DialogDescription>
												When you are ready to book this Vila, please fill the
												form below.
											</DialogDescription>
										</DialogHeader>
										{/* form data */}
										<ProfileForm className="px-4" />
									</DialogContent>
								</Dialog>
							</div>

							<Link href={`/rooms/${slug.current}`}>
								<div className="relative mx-auto aspect-video w-full overflow-hidden">
									<Image
										alt="villa"
										src={urlFor(coverImage).url()}
										// width={500}
										// height={500}
										fill
										sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
										className="img scale-animation rounded-lg object-cover object-center"
									/>
								</div>
								<div className="p-1">
									<h1 className="title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg">
										{name.slice(0, 20)}
									</h1>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										Ma So: {code}
									</h2>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										Vila: {type === "mini" ? "Mini" : `${type} Room`}
									</h2>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										$: {price} VND
									</h2>
									<p className="line-clamp-3 text-[0.8rem]">
										{description.split("\n").map((item, key) => {
											return (
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												<span key={key}>
													{item}
													<br />
												</span>
											);
										})}
									</p>
									{/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
									<div className="flex flex-wrap items-center ">
										<Link
											className="scale-animation-small inline-flex items-center text-xs text-sky-500 shadow-tertiary-primary text-shadow-lg md:m-0 "
											href={`/rooms/${slug.current}`}
										>
											Xem chi tiết
											<svg
												className="ml-2 h-4 w-4"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</Link>
									</div>
								</div>
							</Link>
						</div>
					</div>
				) : (
					<div className=" rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-tertiary-primary hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 ">
						<div className="w-ful relative h-full rounded-lg bg-gray-50">
							<div className="absolute bottom-0 left-0 right-0 top-0 z-40 rounded-lg backdrop-blur-sm"></div>
							{/* <!-- Top Right --> */}
							{/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
							<div className="absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-lg">
								<div className="absolute left-0 top-0 h-2 w-2 bg-amber-500"></div>
								<div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
								<div
									// href='#'
									className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-amber-800 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-yellow-300"
								>
									{isBooked ? "Booked" : "Book Now"}
								</div>
							</div>
							<Link href={`/rooms/${slug.current}`}>
								<div className="relative mx-auto aspect-video w-full overflow-hidden rounded-lg">
									<Image
										alt="villa"
										src={urlFor(coverImage).url()}
										// width={500}
										// height={500}
										fill
										sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
										className="img scale-animation rounded-lg object-cover object-center"
									/>
								</div>
								<div className="p-1">
									<h1 className="title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg">
										{name.slice(0, 20)}
									</h1>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										Ma So: {code}
									</h2>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										Vila: {type === "mini" ? "Mini" : `${type} Room`}
									</h2>
									<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
										$: {price} VND
									</h2>
									<p className="line-clamp-3 text-[0.8rem]">
										{description.split("\n").map((item, key) => {
											return (
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												<span key={key}>
													{item}
													<br />
												</span>
											);
										})}
									</p>
									{/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
									<div className="flex flex-wrap items-center ">
										<Link
											className="scale-animation-small mb-0 inline-flex items-center text-xs text-sky-500 shadow-tertiary-primary text-shadow-lg"
											href={`/rooms/${slug.current}`}
										>
											Xem chi tiet
											<svg
												className="ml-2 h-4 w-4"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</Link>
									</div>
								</div>
							</Link>
						</div>
					</div>
				)}
			</section>
		);
	}
	return (
		<section className="body-font mx-auto w-full  text-gray-600 transition-all duration-100 hover:scale-[1.01]">
			{!isBooked ? (
				<div className="  rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-tertiary-primary hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 ">
					<div className="w-ful relative h-full rounded-lg bg-gray-50">
						{/* <!-- Top Right --> */}
						{/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

						<div className="absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm">
							<div className="absolute left-0 top-0 h-2 w-2 bg-orange-800" />
							<div className="absolute bottom-0 right-0 h-2 w-2 bg-orange-800" />

							<Drawer
								open={open}
								onOpenChange={setOpen}
								snapPoints={[0.7, 1]}
								// snapPoints={[0.5, 0.8, 1]}
								activeSnapPoint={snap}
								setActiveSnapPoint={setSnap}
							>
								<DrawerTrigger asChild>
									<div className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-primary py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-slate-200 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-tertiary-primary">
										{isBooked ? "Booked" : "Book Now"}
									</div>
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
												When you are ready to book this Vila, please fill the
												form below.
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
						</div>

						<Link href={`/rooms/${slug.current}`}>
							<div className="relative mx-auto aspect-video w-full overflow-hidden">
								<Image
									alt="villa"
									src={urlFor(coverImage).url()}
									// width={500}
									// height={500}
									fill
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
									// placeholder='blur'
									className="img scale-animation rounded-lg object-cover object-center"
								/>
								{/* <DynamicBlur src={urlFor(coverImage).url()} /> */}
							</div>
							<div className="p-1">
								<h1 className="title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg">
									{name.slice(0, 20)}
								</h1>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									Ma So: {code}
								</h2>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									Vila: {type === "mini" ? "Mini" : `${type} Room`}
								</h2>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									$: {price} VND
								</h2>
								<p className="line-clamp-3  text-[0.8rem]">
									{description.split("\n").map((item, key) => {
										return (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<span key={key}>
												{item}
												<br />
											</span>
										);
									})}
								</p>
								{/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
								<div className="flex flex-wrap items-center ">
									<Link
										className="scale-animation-small inline-flex items-center text-sm text-sky-500 md:mb-2 lg:mb-0"
										href={`/rooms/${slug.current}`}
									>
										Xem chi tiet
										<svg
											className="ml-2 h-4 w-4"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</Link>
					</div>
				</div>
			) : (
				<div className="  rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px]  shadow-2xl hover:from-pink-300 hover:to-blue-300  hover:ring hover:ring-tertiary-primary hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 ">
					<div className="w-ful relative h-full rounded-lg bg-gray-50">
						<div className="absolute bottom-0 left-0 right-0 top-0 z-40 rounded-lg backdrop-blur-sm"></div>
						{/* <!-- Top Right --> */}
						{/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

						<div className="absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm">
							<div className="absolute left-0 top-0 h-2 w-2 bg-amber-500"></div>
							<div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
							<div className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-amber-800 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-yellow-300">
								{isBooked ? "Booked" : "Book Now"}
							</div>
						</div>

						<Link href={`/rooms/${slug.current}`}>
							<div className="relative mx-auto aspect-video w-full overflow-hidden">
								<Image
									alt="villa"
									src={urlFor(coverImage).url()}
									// width={500}
									// height={500}
									fill
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
									className="img scale-animation rounded-lg object-cover object-center"
								/>
							</div>
							<div className="p-1">
								<h1 className="title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg">
									{name.slice(0, 20)}
								</h1>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									Ma So: {code}
								</h2>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									Vila: {type === "mini" ? "Mini" : `${type} Room`}
								</h2>
								<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm">
									$: {price} VND
								</h2>
								<p className="line-clamp-3 text-[0.8rem]">
									{description.split("\n").map((item, key) => {
										return (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<span key={key}>
												{item}
												<br />
											</span>
										);
									})}
								</p>
								{/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
								<div className="flex flex-wrap items-center ">
									<Link
										className="scale-animation-small inline-flex items-center text-sky-500 md:mb-2 lg:mb-0"
										href={`/rooms/${slug.current}`}
									>
										Xem chi tiet
										<svg
											className="ml-2 h-4 w-4"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default RoomCard;
