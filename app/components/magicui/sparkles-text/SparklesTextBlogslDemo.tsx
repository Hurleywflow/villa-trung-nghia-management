"use client";
import { usePathname } from "next/navigation";
import SparklesText from "./SparklesText";
export async function SparklesTextBlogslDemo() {
	const pathname = usePathname();

	return (
		<SparklesText
			text={pathname.includes("/vi") ? "CÁC CHUYẾN THAM QUAN NỖI BẬT" : "OUR FEATURE TOURS"}
		/>
	);
}
