import AvatarCircles from './AvatarCircles'

const avatarUrls = [
	'/images/Testimonials/t1.png',
	'/images/Testimonials/t2.png',
	'/images/Testimonials/t3.png',
	'/images/Testimonials/t4.png',
	'/images/Testimonials/t5.png',
]

export default function AvatarCirclesDemo() {
	return <AvatarCircles numPeople={19} avatarUrls={avatarUrls} />
}
