import Image from "next/image";
/* eslint-disable @typescript-eslint/ban-types */
import { type FC, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeading from "../TextSectionHeading/SectionHeading";

type Props = {};

const Contact: FC<Props> = () => {
	const contactMethods = [
		{
			iconEmail: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<title>wifi [#1018]</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>
			),
			email: "trungnguyenzx@gmail.com",
		},
		{
			iconPhone: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<title>wifi [#1018]</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					/>
				</svg>
			),
			phone: "0937 655 411",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<title>wifi [#1018]</title>

					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
					/>
				</svg>
			),
			contact: "Hẻm 11/5 Khe Sanh, Phường 10, Đà Lạt, Lâm Đồng 66000, Vietnam",
		},
	];
	return (
		<section className="mx-auto mt-[5dvh] py-14" id="Contact">
			<SectionHeading> Liên hệ</SectionHeading>
			<div className="max-w-screen px-1">
				<div className="mx-auto flex max-w-lg flex-col items-center justify-between gap-5 md:max-w-none md:flex-row">
					<div className="w-full space-y-3 md:w-1/2">
						<h3 className="text-3xl font-semibold sm:text-4xl">
							Có thể giúp gì cho bạn?
						</h3>
						<p>
							Chúng tôi hỗ trợ và trả lời bất kỳ thắc mắc nào. rất mong nhận
							được phản hồi từ bạn! Thông tin liên hệ của chúng tôi dưới đây.
						</p>
						<div>
							<ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
								{contactMethods.map((item, idx) => (
									<li
										key={idx}
										className="flex items-center gap-x-3 hover:text-pink-500"
									>
										<i className="flex-none text-gray-400">{item.iconEmail}</i>
										<a href="mailto:trungnguyenzx@gmail.com">{item.email}</a>
									</li>
								))}
								{contactMethods.map((item, idx) => (
									<li
										key={idx}
										className="flex items-center gap-x-3 hover:text-pink-500"
									>
										<i className="flex-none text-gray-400">{item.iconPhone}</i>
										<a href="tel:0937655411">{item.phone}</a>
									</li>
								))}
								{contactMethods.map((item, idx) => (
									<li
										key={idx}
										className="flex items-center gap-x-3 hover:text-pink-500"
									>
										<i className="flex-none text-gray-400">{item.icon}</i>
										<a href="https://maps.app.goo.gl/kZhrRsqXco1CC1Bv7" target="_blank">
											{item.contact}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						{/* add Map to this section  */}
						<div className="relative aspect-video size-full overflow-hidden rounded-lg">
							<Suspense
								fallback={
									<div className="w-full h-full bg-background flex items-center justify-center flex-col space-y-3">
										<Skeleton className="aspect-video w-[380px] rounded-xl" />
										<div className="space-y-2">
											<Skeleton className="h-4 w-[250px]" />
											<Skeleton className="h-4 w-[200px]" />
										</div>
										{/* <p className='text-center text-2xl text-tertiary-primary tracking-wider animate-pulse '>
															Loading...
														</p> */}
									</div>
								}
							>
								<Image
									alt="pizza"
									// width={500}
									// height={500}
									className="object-cover object-center transition-all duration-300 ease-in-out hover:scale-125"
									fill
									sizes="(max-width: 768px) 100vw, 30vw"
									src="/contact.jpg"
									// Static images
									// placeholder='blur'
								/>
							</Suspense>
						</div>
						{/* <iframe
              width='100%'
              height='100%'
              class='absolute inset-0'
              frameborder='0'
              title='map'
              marginheight='0'
              marginwidth='0'
              scrolling='no'
              src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
              style='filter: grayscale(1) contrast(1.2) opacity(0.4);'
            ></iframe> */}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
