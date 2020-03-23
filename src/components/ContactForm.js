import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core/'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& label.Mui-focused': {
			color: 'green'
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: theme.palette.primary.main
			},
			'&:hover fieldset': {
				borderColor: theme.palette.secondary.main
			},
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.secondary.main
			},
			'&.MuiInputLabel': {
				color: theme.palette.primary.main
			}
		}
	},
	test: {},
	input: {
		color: theme.palette.primary.main
	}
}))

export default function ContactForm() {
	const encode = (data) => {
		const formData = new FormData()
		Object.keys(data).forEach((k) => {
			formData.append(k, data[k])
		})
		return formData
	}
	const classes = useStyles()
	const [
		email,
		setEmail
	] = useState('')
	const [
		name,
		setName
	] = useState('')
	const [
		message,
		setMessage
	] = useState('')
	const [
		status,
		setStatus
	] = useState('')

	const { i18n, t } = useTranslation()

	const handleSubmit = (e) => {
		const data = { 'form-name': 'contact', email, name, message }
		fetch('/', {
			method: 'POST',
			body: encode(data)
		})
			.then(() => setStatus('Form Submission Successful!!'))
			.catch((error) => setStatus('Form Submission Failed!'))

		e.preventDefault()
	}

	return (
		<form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete='off'>
			<TextField
				variant='outlined'
				className={classes.test}
				placeholder='Email'
				value={email}
				onChange={(event) => {
					setEmail(event.target.value)
				}}
			/>
			<TextField
				variant='outlined'
				placeholder='Name'
				value={name}
				onChange={(event) => {
					setName(event.target.value)
				}}
			/>
			<TextField
				multiline
				rows='4'
				variant='outlined'
				placeholder={t('message')}
				value={message}
				onChange={(event) => {
					setMessage(event.target.value)
				}}
			/>
			<Button type='submit'> {t('submit')}</Button>
		</form>
	)
}
