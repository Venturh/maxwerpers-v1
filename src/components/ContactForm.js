import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, IconButton, SvgIcon, Box, Paper } from '@material-ui/core/'
import { useTranslation } from 'react-i18next'
import { GooglePlay, GithubCircle, Linkedin } from 'mdi-material-ui'

export default function ContactForm() {
	const useStyles = makeStyles((theme) => ({
		form: {
			display: 'flex',
			flexDirection: 'column',
			marginTop: theme.spacing(2),
			'& .MuiOutlinedInput-root': {
				'& fieldset': {
					borderColor: theme.palette.primary.main
				}
			}
		},
		input: {
			color: theme.palette.primary.main
		},
		formitems: {
			marginTop: 10,
			marginBottom: 10
		}
	}))

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
		<Box>
			<Typography variant='h5'>{t('contactme')}</Typography>
			<form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete='off'>
				<Typography style={{ marginLeft: 2 }}>Email</Typography>
				<TextField
					fullWidth
					variant='outlined'
					className={classes.test}
					placeholder='Email'
					value={email}
					onChange={(event) => {
						setEmail(event.target.value)
					}}
					className={classes.formitems}
				/>
				<Typography style={{ marginLeft: 2 }}>Name</Typography>
				<TextField
					variant='outlined'
					placeholder='Name'
					value={name}
					onChange={(event) => {
						setName(event.target.value)
					}}
					className={classes.formitems}
				/>
				<Typography style={{ marginLeft: 2 }}>{t('message')}</Typography>
				<TextField
					multiline
					rows='4'
					variant='outlined'
					placeholder={t('message')}
					value={message}
					onChange={(event) => {
						setMessage(event.target.value)
					}}
					className={classes.formitems}
				/>
				<Button variant='contained' color='secondary' type='submit' className={classes.formitems}>
					{t('submit')}
				</Button>
			</form>
		</Box>
	)
}

export function ContactCard() {
	const useStyles = makeStyles((theme) => ({
		card: { marginTop: theme.spacing(2) },
		icons: { fontSize: 100, color: theme.palette.primary.main }
	}))
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	return (
		<Box>
			<Typography variant='h5'>{t('cardTitle')}</Typography>
			<Paper elevation={3} className={classes.card}>
				<Box display='flex' flexDirection='row'>
					<IconButton>
						<GithubCircle className={classes.icons} />
					</IconButton>
					<Box display='flex' flexDirection='column' justifyContent='center'>
						<Typography variant='h5'>Github</Typography>
						<Typography variant='body1'>{t('githubDesc')}</Typography>
					</Box>
				</Box>
			</Paper>

			<Paper elevation={3} className={classes.card}>
				<Box display='flex' flexDirection='row'>
					<IconButton>
						<GooglePlay className={classes.icons} />
					</IconButton>
					<Box display='flex' flexDirection='column' justifyContent='center'>
						<Typography variant='h5'>Google Play</Typography>
						<Typography variant='body1'>{t('playstoreDesc')}</Typography>
					</Box>
				</Box>
			</Paper>

			<Paper elevation={3} className={classes.card}>
				<Box display='flex' flexDirection='row'>
					<IconButton>
						<Linkedin className={classes.icons} />
					</IconButton>
					<Box display='flex' flexDirection='column' justifyContent='center'>
						<Typography variant='h5'>LinkedIn</Typography>
						<Typography variant='body1'>{t('linkedinDesc')}</Typography>
					</Box>
				</Box>
			</Paper>
		</Box>
	)
}
