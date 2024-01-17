/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRooms } from '@/libs/apis';

export default async function sitemap() {
  const baseURL = 'http://localhost:3000';
  // get all rooms
  const rooms = await getRooms();
  console.log(rooms);
  const routesURL =
    rooms.map((room: { slug: any }) => {
      return {
        url: `${baseURL}/rooms/${room.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      };
    }) ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...routesURL,
  ];
}
