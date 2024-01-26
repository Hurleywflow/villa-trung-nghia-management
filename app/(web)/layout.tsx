/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import  { type Metadata } from 'next'
import Script from 'next/script'
import { Toaster } from '@/components/ui/toaster'
import Footer from '../components/footer/footer'
import Sidebar from '../components/Header/nav/sideBar/sidebar'
import Navbar from '../components/Header/Navbar'
import Toast from '../components/Toast/Toast'
// import Script from 'next/script';
// import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import '../globals.css'
import { TailwindIndicator } from '../components/tailwind-indicator/tailwind-indicator';

export const metadata: Metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: 'Villa Dalat | Trung Nghia | Villa Đà Lạt | hotel | home stay',
	description:
		'Villa Trung Nghĩa ở Đà Lạt cung cấp hơn 100 căn biệt thự sang trọng với giá cả hợp lý, view đẹp và vị trí thuận tiện ngay trung tâm thành phố. Các biệt thự mới toanh được trang bị đầy đủ tiện nghi gồm 4-15 phòng ngủ. Không gian rộng rãi với sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc. Villa Trung Nghĩa phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị... Các dịch vụ bao gồm đưa đón sân bay, thuê xe, dựng tiệc BBQ với hơn 30 món ăn độc đáo, cho thuê âm thanh ánh sáng. Villa Trung Nghĩa được trang bị đầy đủ tiện nghi phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, tiệc nướng BBQ ngoài trời, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị. Ngoài ra, Villa còn cung cấp dịch vụ tổ chức tiệc sinh nhật, lễ kỷ niệm, tiệc nướng BBQ ngoài trời với thực đơn tiệc nướng hấp dẫn lên đến hơn 30 món ăn lạ miệng. Villa Trung Nghĩa cũng cho thuê loa kéo, phục vụ ca hát để sự kiện thêm phần sôi động.',
	verification: {
		google: '3008361373778677',
	},
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: 1,
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
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
			></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-F2CXCHFN4L');`}
			</Script>
			{/* Google Analytics npm packages*/}
			{/* <GoogleAnalytics measurementId='G-XXXXXXXXXX' /> */}
		</html>
	)
}
