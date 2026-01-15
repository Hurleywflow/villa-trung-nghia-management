/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Confetti } from '@neoconfetti/react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
// import { redirect, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import FormSubmitButton from '../formStatusButton/FormSubmitButton'

// write a regex to validation the phone number
const phoneRegex = /^\d{10,13}$/

const FormSchema = z.object({
	code: z.string().min(1, {
		message: 'Room code must be at least 1 character.',
	}),
	villaname: z.string().min(2, {
		message: 'Vila name must be at least 2 characters.',
	}),
	guest: z.string().min(1, {
		message: 'Guest must be at least 1 digits.',
	}),
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Invalid email address.',
	}),
	phone: z.string().refine((value) => phoneRegex.test(value), {
		message: 'Phone number is not valid.',
	}),
	checkin: z.date({
		required_error: 'A date of check in is required.',
	}),
	checkout: z.date({
		required_error: 'A date of check out is required.',
	}),
	note: z.string().max(500, {
		message: 'Message must not be longer than 500 characters.',
	}),
})

function ProfileForm({ className }: React.ComponentProps<'form'>) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			code: '',
			villaname: '',
			guest: '',
			username: '',
			email: '',
			phone: '',
			checkin: new Date(),
			checkout: new Date(),
			note: '',
		},
	})
	const router = useRouter()

	//! filter input value to get result on searching
	// async function filterJobs(formData: FormData) {
	//   // 'use server'
	//   // console.log(formData.get('villaname') as string)

	//   const values = Object.fromEntries(formData.entries())

	//   const { villaname } = FormSchema.parse(values)
	//   // const { q, type, location, remote } = FormSchema.parse(values)

	//   const searchParams = new URLSearchParams({
	//     ...(villaname && { villaname: villaname.trim() }),

	//     // ...(q && { q: q.trim() }),
	//     // ...(type && { type }),
	//     // ...(location && { location }),
	//     // ...(remote && { remote: 'true' }),
	//   })

	//   redirect(`/?${searchParams.toString()}`)
	// }

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// const calcMinCheckoutDate = () => {
		//   if (data.checkin) {
		//     const nextDay = new Date(data.checkin);
		//     nextDay.setDate(nextDay.getDate() + 1);
		//     return nextDay;
		//   }
		//   return null;
		// };

		// const handleBookNowClick = async () => {
		//   if (!data.checkin || !data.checkout) return;
		//   toast({
		//     variant: 'destructive',
		//     title: 'Uh oh! Something went wrong.',
		//     description: 'Please provide checkin / checkout date.',
		//     action: <ToastAction altText='Try again'>Try again</ToastAction>,
		//   });

		//   if (data.checkin > data.checkout)
		//     return toast({
		//       variant: 'destructive',
		//       title: 'Uh oh! Something went wrong.',
		//       description: 'Please choose a valid checkin period',
		//       action: <ToastAction altText='Try again'>Try again</ToastAction>,
		//     });

		//   const calcNumDays = () => {
		//     if (!data.checkin || !data.checkout) return;
		//     const timeDiff = data.checkout.getTime() - data.checkin.getTime();
		//     const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
		//     return noOfDays;
		//   };

		//   const numberOfDays = calcNumDays();

		//   // const hotelRoomSlug = room.slug.current;
		// };
		interface FormData {
			checkin: Date
			checkout: Date
		}

		function validateDates(data: FormData): void {
			if (!(data.checkin instanceof Date) || !(data.checkout instanceof Date)) {
				throw new Error('Checkin and checkout must be valid Date objects')
			}

			if (!data.checkin || !data.checkout) {
				throw new Error('Please provide checkin and checkout dates')
			}

			if (data.checkin >= data.checkout) {
				throw new Error('Checkin date must be before checkout date')
			}
		}

		function showDateError(error: string): void {
			toast({
				variant: 'destructive',
				title: 'Uh oh! Something went wrong.',
				description: error,
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			})
		}

		try {
			validateDates(data)
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			showDateError(error.message)
			return
		}

		// const calculateNights = (checkin: Date, checkout: Date) => {
		//   const timeDiff = checkout.getTime() - checkin.getTime();
		//   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		// };

		// post data to resend api
		try {
			await fetch('/api/email', {
				method: 'POST',
				body: JSON.stringify(data),
			})
		} catch (error) {
			throw new Error('Error sending email')
		}

		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 flex w-[340px] items-center justify-center rounded-md bg-slate-700 p-4">
					<span className="mx-auto text-center">{data && <Confetti />}</span>
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})

		// reset to default value of the from, closed dialog or drawer and redirect to home page
		form.reset()
		await new Promise((resolve) => setTimeout(resolve, 3000))
		router.push('/')
	}

	return (
		<Form {...form}>
			{/* <form
        action={filterJobs}
        className={cn(
          'grid h-[70svh] items-start gap-4 overflow-y-auto',
          className,
        )}
      > */}
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn(
					'grid h-[70svh] items-start gap-4 overflow-y-scroll',
					className,
				)}
			>
				<FormField
					control={form.control}
					name="villaname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tên Villa</FormLabel>
							<FormControl>
								<Input placeholder="Vila DaLat" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="code"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Mã số</FormLabel>
							<FormControl>
								<Input placeholder="5.1" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="guest"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Số lượng khách</FormLabel>
							<FormControl>
								<Input placeholder="20 " {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tên người đặt</FormLabel>
							<FormControl>
								<Input placeholder="Hurley Nguyen" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="hurley@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Số điện thoại</FormLabel>
							<FormControl>
								<Input placeholder="0123456789" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="checkin"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Ngày đến</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={'outline'}
											className={cn(
												'w-[240px] pl-3 text-left font-normal',
												!field.value && 'text-muted-foreground',
											)}
										>
											{field.value ? (
												format(field.value, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date < new Date() || date < new Date('1900-01-01')
										}
										// initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="checkout"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Ngày đi</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={'outline'}
											className={cn(
												'w-[240px] pl-3 text-left font-normal',
												!field.value && 'text-muted-foreground',
											)}
										>
											{field.value ? (
												format(field.value, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date < new Date() || date < new Date('1900-01-01')
										}
										// initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="note"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ghi chú</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Hãy cho chúng tôi biết thêm về yêu cầu của bạn..."
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormSubmitButton className="">Submit</FormSubmitButton>
			</form>
		</Form>
	)
}

export default ProfileForm
