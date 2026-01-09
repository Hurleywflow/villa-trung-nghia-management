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
		generator: "Next.js",
	applicationName: "NetCode",
	referrer: "origin-when-cross-origin",
	authors: [
		{ name: "Hurley" },
		{ name: "Nguyen", url: "https://www.villadalat.org" },
	],
	creator: "Hurley Nguyen",
	publisher: "Hurley Nguyen",
	metadataBase: new URL("https://www.villadalat.org"),
	title: "Villa Đà Lạt | Villa Dalat | Hotel | Home stay",
	description:
		"Villa Trung Nghĩa ở Đà Lạt cung cấp hơn 100 căn biệt thự sang trọng với giá cả hợp lý, view đẹp và vị trí thuận tiện ngay trung tâm thành phố. Các biệt thự mới toanh được trang bị đầy đủ tiện nghi gồm 4-15 phòng ngủ. Không gian rộng rãi với sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc. Villa Trung Nghĩa phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị.",
		keywords: [
			"Villa Đà Lạt",
			"Villa Dalat",
			"Hotel",
			"Home stay",
			"Đà Lạt",
			"Đà Lạt Villa",
			"Đà Lạt Hotel",
			"Đà Lạt Home stay",
			"Đà Lạt Villa Đà Lạt",
			"Đà Lạt Villa Dalat",
			"Đà Lạt Villa Hotel",
			"Đà Lạt Villa Home stay",
	],
			openGraph: {
		title: "Villa Đà Lạt",
		description:
			"Villa Đà Lạt là một trong những villa đẹp nhất tại Đà Lạt. Nó có view đẹp, sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc.",
		type: "website",
		url: "https://www.villadalat.org",
		siteName: "Villa Đà Lạt",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Villa Đà Lạt",
		description:
			"Villa Đà Lạt là một trong những villa đẹp nhất tại Đà Lạt. Nó có view đẹp, sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc.",
		images: {
			url: "/opengraph-image.png",
			width: 1200,
			height: 630,
		},
	},


};
export const viewport = {
	initialScale: 1,
	maximumScale: 2,
	// userScalable: 'no',
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
		<html lang="en" className="bg-slate-100 text-slate-600 h-full">

			<body suppressHydrationWarning={true} className="scroll-smooth bg-slate-100 text-slate-600 overflow-x-clip">
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
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
				<Script id='schema-localBusiness' type='application/ld+json'>
				{`{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Villa Đà Lạt",
    "description": "Villa Đà Lạt là một trong những villa đẹp nhất tại Đà Lạt. Nó có view đẹp, sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc.",
    "url": "https://www.villadalat.org",
    "image": "https://www.villadalat.org",
		"logo": "https://www.villadalat.org/favicon-96x96.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": " Phường 11, Thành phố Đà Lạt",
      "postalCode": "670000",
      "addressLocality": "Đà Lạt",
      "addressRegion": "Lâm Đồng",
      "addressCountry": "Vietnam"
    },
    "telephone": "+84 934 353 636",
    "email": "hurleywflow@gmail.com",
		"priceRange": "From $25 <i>USD</i> to $9,990 <i>USD</i>",
    "openingHoursSpecification": [ {
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": [
		"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
		],
		"opens": "00:00",
		"closes": "12:00"
		},
		{
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": [
		"Saturday",
		"Sunday" ],
		"opens": "11:00",
		"closes": "15:00"
		}],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "5",
      "ratingCount": "6",
			"url": "https://www.villadalat.org/testimonials"
    }
  }`}
			</Script>
			<Script id='schema-Organization' type='application/ld+json'>
				{`{
    "@context": "https://schema.org",
		"@type": "Organization",
    "name": "Villa Đà Lạt",
    "description": 'Villa Đà Lạt là một trong những villa đẹp nhất tại Đà Lạt. Nó có view đẹp, sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc.',
    "url": "https://www.villadalat.org",
    "image": "https://www.villadalat.org",
		"logo": "https://www.villadalat.org/favicon-96x96.png",
		"founder": {
			"@type": "Person",
			"name": "Hurley Nguyen",
			"email": "hurleywflow@gmail.com",
			"sameAs": [
			"https://www.villadalat.org",
			"https://www.linkedin.com/in/hurley-nguyen-477346228/",
			"https://github.com/hurleywflow",
			"https://x.com/netcodedev?s=21&t=aUbW-oRjhH8rILkUMppVEA:http://twitter.com/https%3A//x.com/netcodedev%3Fs=21&t=aUbW-oRjhH8rILkUMppVEA"
		]
	}
  }`}
			</Script>
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
