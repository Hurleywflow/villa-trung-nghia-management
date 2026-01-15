import { defineField } from 'sanity'

const user = {
	name: 'user',
	title: 'user',
	type: 'document',
	fields: [
		defineField({
			name: 'isAdmin',
			title: 'Is Admin',
			type: 'boolean',
			description: 'Check if the user is admin',
			initialValue: false,
			validation: (Rule) => Rule.required(),
			//   readOnly: true,
			//   hidden: true,
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Name of the user',
			readOnly: true,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'object',
			fields: [
				{ name: 'url', type: 'url', title: 'URL' },
				{ name: 'file', type: 'file', title: 'File' },
			],
		}),
		defineField({
			name: 'password',
			type: 'string',
			hidden: true,
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
		}),
		defineField({
			name: 'emailVerified',
			type: 'datetime',
			hidden: true,
		}),
		defineField({
			name: 'about',
			title: 'About',
			// For longer string
			type: 'text',
			description: 'A brief description about the user',
		}),
	],
}

export default user
