import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactFormEmailBlockProps {
  code?: string;
  villaname?: string;
  guest?: string;
  username?: string;
  email?: string;
  phone?: string;
  checkin?: Date;
  checkout?: Date;
  note?: string;
}

const ContactFormEmailBlock = ({
  code,
  villaname,
  guest,
  username,
  email,
  phone,
  checkin,
  checkout,
  note,
}: ContactFormEmailBlockProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your Villa Trung Nghia management</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='borderBlack my-10 rounded-md bg-white px-10 py-4'>
              <Heading className='leading-tight'>
                You received the following message for Booking
              </Heading>
              <Text>{code}</Text>
              <Text>{villaname}</Text>
              <Text>{guest}</Text>
              <Text>{username}</Text>
              <Text>{email}</Text>
              <Text>{phone}</Text>
              <Text>{checkin?.toString()}</Text>
              <Text>{checkout?.toString()}</Text>
              <Text>{note}</Text>

              <Hr />
              <Text>The sender's email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmailBlock;
