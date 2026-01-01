"use client";
import { usePathname } from "next/navigation";
import SparklesText from "./SparklesText";

export async function SparklesTextFeedbacklDemo() {
	const pathname = usePathname();
	return (
		<SparklesText
			text={
				pathname.includes("/vi")
					? "PHẢN HỒI CỦA KHÁCH HÀNG"
					: "CUSTOMER'S FEEDBACK"
			}
		/>
	);
}
