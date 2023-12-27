import Image from "next/image";
import { FC } from "react";

import { urlFor } from "@/libs/urlFor";
import { Room } from "@/models/room";
import Link from "next/link";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <section className="body-font w-80 text-gray-600">
      {!isBooked ? (
        <div className="w-ful relative m-5 h-full rounded-lg border-2 border-gray-200 border-opacity-60">
          {/* <!-- Top Right --> */}
          {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

          <div className="absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm">
            <div className="absolute left-0 top-0 h-2 w-2 bg-amber-500"></div>
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
            <Link
              href={`/booking`}
              className="absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300"
            >
              {isBooked ? "Booked" : "Book Now"}
            </Link>
          </div>

          <div className="relative mx-auto aspect-video w-full overflow-hidden">
            <Image
              alt="villa"
              src={urlFor(coverImage).url()}
              // width={500}
              // height={500}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img scale-animation"
            />
          </div>
          <div className="p-6">
            <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
              {name}
            </h1>
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
              {type} Rooms
            </h2>
            <p className="pb-6 pt-3">{description.slice(1, 100)}...</p>
            <div className="flex flex-wrap items-center ">
              <Link
                className="scale-animation-small inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                href={`/rooms/${slug.current}`}
              >
                Xem chi tiet
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="invisible">looking</div>
      )}
    </section>
    // <div className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'>
    //   <div className='h-60 overflow-hidden'>
    //     <Image
    //       src={coverImage.url}
    //       alt={name}
    //       width={250}
    //       height={250}
    //       className='img scale-animation'
    //     />
    //   </div>

    //   <div className='p-4 bg-white'>
    //     <div className='flex justify-between text-xl font-semibold'>
    //       <p>{name}</p>
    //       <p>$ {price}</p>
    //     </div>

    //     <p className='pt-2 text-xs'>{type} Room</p>

    //     <p className='pt-3 pb-6'>{description.slice(1, 100)}...</p>

    //     <Link
    //       href={`/rooms/${slug.current}`}
    //       className='bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
    //     >
    //       {isBooked ? 'BOOKED' : 'BOOK NOW'}
    //     </Link>
    //   </div>
    // </div>
  );
};

export default RoomCard;
