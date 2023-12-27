import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { Image } from '@/models/room';
import imageURL from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source:any) => {
  return builder.image(source);
};


export const imgURL = (source: Image) => {
  return imageURL({
    projectId,
    dataset,
  }).image(source);
};
