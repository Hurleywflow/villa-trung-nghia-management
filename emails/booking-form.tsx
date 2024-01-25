import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import { format } from 'date-fns'

interface ContactFormEmailBlockProps {
	code?: string
	villaname?: string
	guest?: string
	username?: string
	email?: string
	phone?: string
	checkin?: Date
	checkout?: Date
	note?: string
}

const ContactFormEmailBlock = ({
	code,
	villaname,
	guest,
	username,
	email,
	phone,
	checkin = new Date(),
	checkout = new Date(),

	note,
}: ContactFormEmailBlockProps) => {
	return (
		<Html>
			<Head />
			<Preview>New message from Villa Trung Nghia management</Preview>
			<Tailwind>
				<Body className="bg-slate-100 text-black">
					<Container>
						<Section className="borderBlack my-10 rounded-md bg-slate-200 px-10 py-4 text-slate-950">
							<Row>
								<Heading className="leading-tight">
									You received the Booking for Villa Dalat.
								</Heading>
							</Row>
							<Hr />
							<Row>
								<Text>Mã số: {code}</Text>
								<Text>Tên Villa: {villaname}</Text>
								<Text>Số lượng khách: {guest}</Text>
								<Text>Tên: {username}</Text>
								<Text>Email: {email}</Text>
								<Text>Số Điện Thoại: {phone}</Text>
								<Text>Ngày đến: {format(new Date(checkin), 'dd/MM/yyyy')}</Text>
								<Text>Ngày đi: {format(new Date(checkout), 'dd/MM/yyyy')}</Text>
								{/* <Text>
                  Ngày đến:{' '}
                  {formatISO(new Date(checkin), {
                    representation: 'date',
                  })}
                </Text>
                <Text>
                  Ngày đi:{' '}
                  {formatISO(new Date(checkout), {
                    representation: 'date',
                  })}
                </Text> */}
								<Text>Thêm yêu cầu: {note}</Text>
							</Row>
							<Hr />
							<Text>The sender's email is: {email}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}

export default ContactFormEmailBlock
