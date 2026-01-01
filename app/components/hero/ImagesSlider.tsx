"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const ImagesSlider = ({
	images,
	children,
	overlay = true,
	overlayClassName,
	className,
	autoplay = true,
	direction = "up",
}: {
	images: string[];
	children: React.ReactNode;
	overlay?: boolean;
	overlayClassName?: string;
	className?: string;
	autoplay?: boolean;
	direction?: "up" | "down";
}): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0);
	// biome-ignore lint/correctness/noUnusedVariables: <explanation>
	const [loading, setLoading] = useState(false);
	const [loadedImages, setLoadedImages] = useState<string[]>([]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1,
		);
	}, [images]);

	const handlePrevious = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
		);
	}, [images]);

	useEffect(() => {
		const loadImages = (): void => {
			setLoading(true);
			const loadPromises = images.map(async (image) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = image;
					img.onload = () => {
						resolve(image);
					};
					img.onerror = reject;
				});
			});

			Promise.all(loadPromises)
				.then((loadedImages) => {
					setLoadedImages(loadedImages as string[]);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Failed to load images", error);
				});
		};
		loadImages();
	}, [images]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === "ArrowRight") {
				handleNext();
			} else if (event.key === "ArrowLeft") {
				handlePrevious();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// autoplay
		let interval: number | NodeJS.Timeout | null = null;
		if (autoplay) {
			interval = setInterval(() => {
				handleNext();
			}, 5000) as unknown as number; // Assert the type to number
			// }, 8000) as unknown as number; // Assert the type to number
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			if (interval !== null) {
				clearInterval(interval);
			}
		};
	}, [autoplay, handleNext, handlePrevious]);

	const slideVariants = {
		initial: {
			scale: 0,
			opacity: 0,
			rotateX: 45,
		},
		visible: {
			scale: 1,
			rotateX: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.645, 0.045, 0.355, 1.0],
			},
		},
		upExit: {
			opacity: 1,
			y: "-150%",
			transition: {
				duration: 1.5,
				// duration: 1,
			},
		},
		downExit: {
			opacity: 1,
			y: "150%",
			transition: {
				duration: 1.5,
				// duration: 1,
			},
		},
	};

	const areImagesLoaded = loadedImages.length > 0;

	return (
		<div
			className={cn(
				"overflow-hidden h-full w-full relative flex items-center justify-center",
				className,
			)}
			style={{
				perspective: "1000px",
			}}
		>
			<div className='absolute inset-0 z-10 flex h-screen w-full items-center justify-center bg-black/40' />
			{areImagesLoaded && children}
			{areImagesLoaded && overlay && (
				//* add overlay class to the parent div
				<div className={cn("absolute inset-0", overlayClassName)} />
				// <div
				// 	className={cn("absolute inset-0 bg-black/70 z-10", overlayClassName)}
				// />
			)}

			{areImagesLoaded && (
				<AnimatePresence>
					<motion.img
						key={currentIndex}
						src={loadedImages[currentIndex]}
						initial='initial'
						animate='visible'
						alt='SliderImage'
						exit={direction === "up" ? "upExit" : "downExit"}
						variants={slideVariants}
						// hero section images need to be eager loaded
						loading='eager'
						className='image absolute inset-0 size-full object-cover object-center'
					/>
				</AnimatePresence>
			)}
		</div>
	);
};
