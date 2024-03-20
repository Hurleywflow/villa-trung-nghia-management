/* eslint-disable @typescript-eslint/ban-types */
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type FC } from "react";
import SectionHeading from "../TextSectionHeading/SectionHeading";

type Props = {};
const marks = [
	{
		name: "Lan Ngọc",
		description:
			"Villa có vị trí nằm ngay trung tâm, không gian yên tĩnh, đẹp. 1 nơi rất đáng đến để trãi nghiệm, sẽ quay lại lắn sau khi.",
		img: "something",
	},
	{
		name: "Hoang Mai",
		description:
			"Phòng sạch sẽ, đủ trang thiết bị và nước nóng. Nhân viên thân thiện dễ thương, giúp đỡ nhiệt tình Vị trí đẹp, thuận tiện...",
	},
	{
		name: "Philippe",
		description:
			"Good value for money, host Vicky was very nice. Over all very supportive",
		img: "something",
	},
];
const markss = [
	{
		name: "Thiên Hòa",
		description:
			"Chúng tôi thường xuyên di Đà Lạt và chọn Trung Nghĩa là điểm nghỉ ngơi.",
		img: "something",
	},
	{
		name: "Claudia",
		description:
			"We loved our stay here!! Such a cute property with such warm and friendly staff. Breakfast was superb!  They cleaned our room so nicely each day.",
		img: "something",
	},
	{
		name: "Trúc Thịnh",
		description:
			'Tôi đã sử dụn "Chỗ nghỉ rất sang trọng, lịch sự, chuyên nghiệp và chu đáo. Mọi thứ đều tiện nghi và hoàn hảo.',
		img: "something",
	},
];

const Testimonials: FC<Props> = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const x2 = useTransform(scrollYProgress, [0, 1], [-100, 0]);
	return (
		<section ref={container} className="w-full overflow-x-hidden">
			<div className="mt-[5dvh]"></div>

			<SectionHeading>khách hàng đánh giá</SectionHeading>
			<motion.div
				style={{ x: x1 }}
				className=" grid  gap-6 text-center md:grid-cols-3 lg:gap-12 place-content-center place-items-center"
			>
				{marks.map((item, i) => {
					return (
						<div
							key={i}
							className="mb-6 w-fit rounded-lg bg-white p-1 shadow dark:bg-gray-800 sm:inline-block"
						>
							<div className="flex items-start text-left">
								<div className="flex-shrink-0">
									<div className="relative inline-block">
										<a href="#" className="relative block">
											<Image
												alt="profil"
												src=""
												fill
												className="mx-auto h-16 w-16 rounded-full object-cover "
											/>
										</a>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											className="absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white"
										>
											<path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"></path>
										</svg>
									</div>
								</div>
								<div className="ml-6">
									<p className="flex items-baseline">
										<span className="font-bold text-gray-600 dark:text-gray-200">
											{item.name}
										</span>
										{/* <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                      2 months ago
                    </span> */}
									</p>
									<div className="mt-1 flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
									</div>
									<div className="mt-3">
										<p className="mt-1 max-w-xs dark:text-white">
											{item.description.split("\n").map((item, key) => {
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
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div
				style={{ x: x2 }}
				className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 place-content-center place-items-center"
			>
				{markss.map((item, i) => {
					return (
						<div
							key={i}
							className="mb-6 w-fit rounded-lg bg-white p-1 shadow dark:bg-gray-800 sm:inline-block"
						>
							<div className="flex items-start text-left">
								<div className="flex-shrink-0">
									<div className="relative inline-block">
										<a href="#" className="relative block">
											<Image
												alt="profil"
												fill
												src=""
												className="mx-auto h-16 w-16 rounded-full object-cover "
											/>
										</a>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											className="absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white"
										>
											<path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"></path>
										</svg>
									</div>
								</div>
								<div className="ml-6">
									<p className="flex items-baseline">
										<span className="font-bold text-gray-600 dark:text-gray-200">
											{item.name}
										</span>
										{/* <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                      2 months ago
                    </span> */}
									</p>
									<div className="mt-1 flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											className="h-4 w-4 text-yellow-500"
											fill="currentColor"
											viewBox="0 0 1792 1792"
										>
											<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
										</svg>
									</div>
									<div className="mt-3">
										<p className="mt-1 max-w-xs dark:text-white">
											{item.description.split("\n").map((item, key) => {
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
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
		</section>
	);
};
export default Testimonials;
