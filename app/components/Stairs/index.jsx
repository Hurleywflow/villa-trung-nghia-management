import { motion } from "framer-motion";
import { expand, opacity } from "./anim";

export default function Layout({ children, backgroundColor }) {
	const anim = (variants, custom = null) => {
		return {
			initial: "initial",
			animate: "enter",
			exit: "exit",
			custom,
			variants,
		};
	};

	const nbOfColumns = 5;
	return (
		<div className="page stairs" style={{ backgroundColor }}>
			<motion.div {...anim(opacity)} className="transition-background" />
			<div className="transition-container">
				{[...Array(nbOfColumns)].map((_, i) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<motion.div key={i} {...anim(expand, nbOfColumns - i)} />
					);
				})}
			</div>
			{children}
		</div>
	);
}
