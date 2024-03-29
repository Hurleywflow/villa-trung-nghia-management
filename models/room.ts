type CoverImage = {
	url: string
}

export type Image = {
	_key: string
	_type: string
}

export type Amenity = {
	_key: string
	amenity: string
	icon: string
}

type Slug = {
	_type: string
	current: string
}

export type Room = {
	_id: string
	code: string
	coverImage: CoverImage
	description: string
	// dimension: string;
	// discount: string;
	images: Image[]
	isBooked: boolean
	isFeatured: boolean
	name: string
	// numberOfBeds: number;
	offeredAmenities: Amenity[]
	price: string
	slug: Slug
	specialNote: string
	type: string
}

export type CreateBookingDto = {
	user: string
	hotelRoom: string
	checkinDate: string
	checkoutDate: string
	numberOfDays: number
	adults: number
	children: number
	totalPrice: number
	// discount: number;
}
