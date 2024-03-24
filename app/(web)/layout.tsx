import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dynamic from "next/dynamic";
import Script from "next/script";
const Toast = dynamic(async () => import("../components/Toast/Toast"));
const Footer = dynamic(async () => import("../components/footer/footer"));
const Navbar = dynamic(async () => import("../components/Header/Navbar"));
const TailwindIndicator = dynamic(
	async () => import("../components/tailwind-indicator/tailwind-indicator"),
);
const Sidebar = dynamic(
	async () => import("../components/Header/nav/sideBar/sidebar"),
);
// import Script from 'next/script';
// import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import "../globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),
	title: "Villa Đà Lạt | Trung Nghia| Hotel | Home stay",
	description:
		"Villa Trung Nghĩa ở Đà Lạt cung cấp hơn 100 căn biệt thự sang trọng với giá cả hợp lý, view đẹp và vị trí thuận tiện ngay trung tâm thành phố. Các biệt thự mới toanh được trang bị đầy đủ tiện nghi gồm 4-15 phòng ngủ. Không gian rộng rãi với sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc. Villa Trung Nghĩa phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị.",
};

export const viewport = {
	initialScale: 1,
	maximumScale: 1,
	userScalable: 'no',
	width: "device-width",
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-slate-100 text-slate-600 ">
			<body className="!scroll-smooth  bg-slate-100 text-slate-600 ">
				{/* <NextAuthProvider> */}
				{/* <ThemeProvider> */}
				<Navbar />
				<Sidebar />
				{children}
				<Footer />
				<Toast />
				{/* </ThemeProvider> */}
				{/* </NextAuthProvider> */}
				<Toaster />
				<TailwindIndicator />
			</body>
			{/* Google Analytics */}
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
				strategy="afterInteractive"
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-F2CXCHFN4L"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-F2CXCHFN4L');`}
			</Script>
			{/* Google Analytics npm packages*/}
			{/* <GoogleAnalytics measurementId='G-XXXXXXXXXX' /> */}
		</html>
	);
}
