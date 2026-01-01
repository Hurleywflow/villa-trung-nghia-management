"use client";
import { usePathname } from "next/navigation";
import SparklesText from "./SparklesText";

export async function SparklesTextContactDemo() {
	const pathname = usePathname();
	return (
		<SparklesText
			text={
				pathname.includes("/vi")
					? "CÙNG CHÚNG TÔI HOÀ MÌNH VÀO NHỮNG CUỘC PHIÊU LƯU THÚ VỊ!"
					: "EMBARK ON MORE ADVENTURES - JOIN US!"
			}
		/>
	);
}
