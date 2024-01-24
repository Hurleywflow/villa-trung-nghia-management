// "use client";
// import { urlFor } from "@/libs/urlFor";
// import { Room } from "@/models/room";
// import Image from "next/image";
// import Link from "next/link";
// import { FC, useState } from "react";

// type Props = {
//   featuredRoom: Room;
// };

// const FeaturedRoom: FC<Props> = (props) => {
//   const { featuredRoom } = props;
//   console.log({ featuredRoom });
//   const [vilas, setVilas] = useState(featuredRoom);
//   console.log(vilas.images);

//   return (
//     <section className="body-font text-gray-600" id="villa">
//       <div className="container mx-auto px-5 py-24">
//         <div className="-m-4 flex flex-wrap">
//           <div className=" p-4 md:w-1/2 lg:w-1/4">
//             <div className="relative h-full rounded-lg border-2 border-gray-200 border-opacity-60 ">
//               {/* <!-- Top Right --> */}
//               {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
//               <div className="absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm">
//                 <div className="absolute left-0 top-0 h-2 w-2 bg-amber-500"></div>
//                 <div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
//                 <Link
//                   href={`/booking`}
//                   className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300"
//                 >
//                   Booking
//                 </Link>
//               </div>
//               <div className="relative mx-auto aspect-video w-full overflow-hidden">
//                 <Image
//                   alt="villa"
//                   src={urlFor(featuredRoom.coverImage).url()}
//                   // width={500}
//                   // height={500}
//                fill
//                   className="img scale-animation"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
//                   CATEGORY
//                 </h2>
//                 <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
//                   {featuredRoom.name}
//                 </h1>
//                 <p className="mb-3 leading-relaxed">
//                   {featuredRoom.description}
//                 </p>
//                 <div className="flex flex-wrap items-center ">
//                   <Link
//                     className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
//                     href={`/rooms/${featuredRoom.slug.current}`}
//                   >
//                     Learn More
//                     <svg
//                       className="ml-2 h-4 w-4"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       fill="none"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     >
//                       <path d="M5 12h14"></path>
//                       <path d="M12 5l7 7-7 7"></path>
//                     </svg>
//                   </Link>
//                   <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
//                     <svg
//                       className="mr-1 h-4 w-4"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       fill="none"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                       <circle cx="12" cy="12" r="3"></circle>
//                     </svg>
//                     1.2K
//                   </span>
//                   <span className="inline-flex items-center text-sm leading-none text-gray-400">
//                     <svg
//                       className="mr-1 h-4 w-4"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       fill="none"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                     </svg>
//                     6
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid h-48 grid-cols-2 gap-8">
//         {/* map through each vila and display */}
//         {vilas.images.map((villa) => (
//           <div key={villa._key} className="overflow-hidden rounded-2xl">
//             <Image
//               src={urlFor(villa).url()}
//               alt={villa._key}
//               width={300}
//               height={300}
//               className="img scale-animation"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default FeaturedRoom;


