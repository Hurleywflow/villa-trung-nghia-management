import ContactFormEmailBlock from '@/emails/contact-form-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<NextResponse> {
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
  console.log(
    code,
    villaname,
    guest,
    username,
    email,
    phone,
    checkin,
    checkout,
    note,
  );

  // if (!code || !villaname || !guest || !username || !email || !phone || !checkin || !checkout ||
  //   !note) {
  //   return Response.json({ error: 'Missing required fields' });

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['hurleywflow@gmail.com'],
      subject: 'New message from your Villa Trung Nghia management',
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
        error: 'Internal server error.',
      },
      {
        status: 500,
      },
    );
  }
}
