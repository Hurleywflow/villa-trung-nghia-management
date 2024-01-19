import ContactFormEmailBlock from '@/emails/booking-form';
import { getErrorMessage } from '@/libs/utils';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<NextResponse> {
  // destructuring the request body into variables
  const {
    code,
    villaname,
    guest,
    username,
    email,
    phone,
    checkin,
    checkout,
    note,
  } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'VillaBooking <onboarding@resend.dev>',
      to: ['trungnguyenzx@gmail.com'],
      subject: 'New message from your Villa Trung Nghia management',
      reply_to: email,
      // send data to react email (booking-form) component to render
      react: ContactFormEmailBlock({
        code,
        villaname,
        guest,
        username,
        email,
        phone,
        checkin,
        checkout,
        note,
      }),
    });

    return NextResponse.json(
      {
        status: 'Ok',
      },
      {
        status: 200,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: getErrorMessage(e),
      },
      {
        status: 500,
      },
    );
  }
}
