'use client';

import { Card } from '@/components/ui/card';
import { useCallback, useEffect, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

export default function ClientPagination() {
  const generateFakeData = useCallback((): any => {
    const newImage = faker.image.urlPicsumPhotos();

    // Check if the image is already in the data array
    const isDuplicate = data.some((user) => user.image === newImage);

    if (!isDuplicate) {
      // If not a duplicate, add the new user to the data array
      setData((prevData) => {
        const newItem = { image: newImage };
        const newData = [...prevData, newItem];

        // Update localStorage with the latest data
        localStorage.setItem('fakeUserData', JSON.stringify(newData));

        return newData;
      });

      return { image: newImage };
    } else {
      // If a duplicate, generate a new user recursively
      return generateFakeData();
    }
  }, [data]);
  // this is Next js specific code to check if the code is running on the client or server
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<{ image: string }[]>([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  //items per a page
  const [postsPerPage, setPostsPerPage] = useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const resetLocalStorage = () => {
    localStorage.removeItem('fakeUserData');
    setData([]); // Reset the data state in the component
  };

  useEffect(() => {
    // Check if data is already present in localStorage
    const storedData = localStorage.getItem('fakeUserData');

    if (storedData) {
      setData(JSON.parse(storedData));
      // this is Next js specific code to check if the code is running on the client or server
      setIsClient(true);
    } else {
      // If data is not present, generate new data and store it in localStorage
      const newData = Array.from({ length: 15 }, generateFakeData);
      setData(newData);
      localStorage.setItem('fakeUserData', JSON.stringify(newData));
      // this is Next js specific code to check if the code is running on the client or server
      setIsClient(true);
    }
  }, [generateFakeData]);

  return (
    <>
      {/* <button onClick={resetLocalStorage}>Reset Local Storage</button> */}
      {isClient ? (
        <>
          <div className='grid w-full gap-10 px-20 py-6 sm:grid-cols-2 md:grid-cols-3'>
            {currentPosts.map((data, idx) => {
              return (
                <Card
                  key={idx}
                  className='flex items-start overflow-hidden text-black'
                >
                  <div className='group flex transform flex-col overflow-hidden transition-all duration-200'>
                    <div className='overflow-hidden rounded-sm'>
                      <Image
                        src={data.image}
                        alt=''
                        width={640}
                        height={480}
                        className='h-full w-full transform object-cover transition-all duration-200 group-hover:scale-105'
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {/* <PaginationSection
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </>
      ) : (
        <div className='grid h-full w-full gap-10 p-10 sm:grid-cols-2 md:grid-cols-3'></div>
      )}
    </>
  );
}

// function PaginationSection({
//   totalPosts,
//   postsPerPage,
//   currentPage,
//   setCurrentPage,
// }: {
//   totalPosts: any;
//   postsPerPage: any;
//   currentPage: any;
//   setCurrentPage: any;
// }) {
//   const pages = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i);
//   }
//   const handleNextPage = () => {
//     if (currentPage < pages.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   return (
//     <div>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious onClick={() => handlePrevPage()} />
//           </PaginationItem>

//           {pages.map((page, idx) => (
//             <PaginationItem
//               key={idx}
//               className={
//                 currentPage === page ? 'rounded-md bg-neutral-100' : ''
//               }
//             >
//               <PaginationLink onClick={() => setCurrentPage(page)}>
//                 {page}
//               </PaginationLink>
//             </PaginationItem>
//           ))}

//           <PaginationItem>
//             <PaginationNext onClick={() => handleNextPage()} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// }
