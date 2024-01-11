// 'use server';

// import ContactFormEmailBlock from '@/emails/contact-form-email';
// import { getErrorMessage } from '@/libs/utils';
// import { Resend } from 'resend';

// // get RESEND_API_KEY from environment variables
// const resend = new Resend(process.env.RESEND_API_KEY);

// type FormData = {
//   code: string;
//   villaname: string;
//   guest: string;
//   username: string;
//   email: string;
//   phone: string;
//   checkin: Date;
//   checkout: Date;
//   note: string;
// };

// export const sendEmail = async (data: FormData) => {
//   // get name input to extract values input
//   // const senderEmail = formData.get('senderEmail');
//   // const message = formData.get('message');
//   console.log(data);

//   // // simple server-side validation
//   // if (!validateString(senderEmail, 500)) {
//   //   return {
//   //     error: 'Invalid sender email',
//   //   };
//   // }
//   // if (!validateString(message, 5000)) {
//   //   return {
//   //     error: 'Invalid message',
//   //   };
//   // }

//   interface FormData {
//     code?: string;
//     villaname: string;
//     guest: string;
//     username: string;
//     email: string;
//     phone: string;
//     checkin: Date;
//     checkout: Date;
//     note: string;
//   }

//   let data1;
//   try {
//     data1 = await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: 'hurleywflow@gmail.com',
//       subject: 'Message from portfolio contact form',
//       reply_to: data.email,
//       // Style and format email content with React.email components library for ts this file
//       react: ContactFormEmailBlock({
//         villaname: data.villaname,
//         guest: data.guest,
//         username: data.username,
//         email: data.email,
//         phone: data.phone,
//         checkin: data.checkin,
//         checkout: data.checkout,
//         note: data.note,
//       }),
//       // If tsx file we do the following instead:
//       // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
//     });
//   } catch (error: unknown) {
//     return {
//       // validate error and return error message
//       error: getErrorMessage(error),
//     };
//   }
//   return {
//     data1,
//   };
// };
