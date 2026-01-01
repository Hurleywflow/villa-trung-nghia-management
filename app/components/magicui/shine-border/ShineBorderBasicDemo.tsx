import ContactSocial from "../../contact-social/ContactSocial";
import ShineBorder from "./ShineBorder";

export function ShineBorderBasicDemo() {
	return (
		<ShineBorder
			className='m-0 flex items-center justify-center bg-background mb-0'
			color={["#A07CFE", "#ff7625", "#E31B5D"]}
		>
			<ContactSocial />
		</ShineBorder>
	);
}

// export function ShineBorderDemo() {
// 	return (
// 		<ShineBorder
// 			className='text-center text-2xl font-bold capitalize'
// 			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
// 		>
// 			Shine Border
// 		</ShineBorder>
// 	);
// }
