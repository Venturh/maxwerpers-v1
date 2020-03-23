import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core/'

export default function ContactForm() {
	const encode = (data) => {
		const formData = new FormData()
		Object.keys(data).forEach((k) => {
			formData.append(k, data[k])
		})
		return formData
	}
	const [
		email,
		setEmail
	] = useState('Email')
	const [
		name,
		setName
	] = useState('Name')
	const [
		message,
		setMessage
	] = useState('Message')
	const [
		status,
		setStatus
	] = useState('')

	const handleSubmit = (e) => {
		const data = { 'form-name': 'contact', email, name, message }
		fetch('/', {
			method: 'POST',
			// headers: { "Content-Type": 'multipart/form-data; boundary=random' },
			body: encode(data)
		})
			.then(() => setStatus('Form Submission Successful!!'))
			.catch((error) => setStatus('Form Submission Failed!'))

		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit} noValidate autoComplete='off'>
			<TextField
				value={email}
				onChange={(event) => {
					setEmail(event.target.value)
				}}
			/>
			<TextField
				value={name}
				onChange={(event) => {
					setName(event.target.value)
				}}
			/>
			<TextField
				value={message}
				onChange={(event) => {
					setMessage(event.target.value)
				}}
			/>
			<Button type='submit'>Submit</Button>
		</form>
	)
}
