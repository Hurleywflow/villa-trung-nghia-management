import { defineField } from 'sanity';

const roomTypes = [
  { title: 'Mini', value: 'mini' },
  { title: 'Room3', value: '3' },
  { title: 'Room4', value: '4' },
  { title: 'Room5', value: '5' },
  { title: 'Room6', value: '6' },
  { title: 'Room7', value: '7' },
  { title: 'Room8', value: '8' },
  { title: 'Room9', value: '9' },
  { title: 'Room10', value: '10' },
  { title: 'Room11', value: '11' },
  { title: 'Room12', value: '12' },
  { title: 'Room13', value: '13' },
  { title: 'Room14', value: '14' },
  { title: 'Room15', value: '15' },
];
// const bedTypes = [
//   { title: "Single", value: "1" },
//   { title: "Double", value: "2" },
//   { title: "Triple", value: "3" },
//   { title: "Quad", value: "4" },
// ]

const hotelRoom = {
  name: 'hotelRoom',
  title: 'Hotel Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Maximum 100 Characters'),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Code of the villa',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().min(100).error('Minimum 100 Characters'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      // validation: (Rule) =>
      //   Rule.required().min(50).error("Minimum 50 Characters"),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],

      validation: (Rule) =>
        Rule.required().min(2).error('Minimum of 2 images required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Cover Image is required'),
    }),
    defineField({
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'mini',
    }),
    // defineField({
    //   name: "bed",
    //   title: "Bed Type",
    //   type: "string",
    //   options: {
    //     list: bedTypes,
    //   },
    //   validation: (Rule) => Rule.required(),
    //   initialValue: "single",
    // }),
    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      validation: (Rule) => Rule.required(),
      initialValue:
        'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    }),
    defineField({
      name: 'dimension',
      title: 'Dimension',
      type: 'string',
      description: 'Dimension of the room, Single, Double, Triple, Public',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'string',
      description: 'Capacity of the people',
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Number Of Beds',
      type: 'number',
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: 'offeredAmenities',
      title: 'Offered Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'amenity', title: 'Amenity', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    }),
  ],
};

export default hotelRoom;
