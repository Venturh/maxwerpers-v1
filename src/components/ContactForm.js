import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, IconButton, Box, Paper } from '@material-ui/core/'
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
	] = useState(true)

	const { t } = useTranslation()

	const handleSubmit = (e) => {
		const data = { 'form-name': 'contact', email, name, message }
		fetch('/', {
			method: 'POST',
			body: encode(data)
		})
			.then(() => setStatus(true))
			.catch((error) => setStatus(false))

		e.preventDefault()
	}

	return (
		<Box>
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
		card: {
			display: 'flex',
			marginTop: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				minHeight: 150,
				justifyContent: 'flex-start'
			}
		},
		icons: {
			fontSize: 80,
			color: theme.palette.primary.main,
			[theme.breakpoints.down('sm')]: {
				fontSize: 45
			}
		},
		cardText: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			marginRight: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				justifyContent: 'center'
			}
		}
	}))
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<Box>
			<Box mt={4}>
				<Paper elevation={3} className={classes.card}>
					<Box display='flex' flexDirection='row'>
						<IconButton target='_blank' href='https://github.com/Venturh'>
							<GithubCircle className={classes.icons} />
						</IconButton>
						<Box className={classes.cardText}>
							<Typography variant='h6'>Github</Typography>
							<Typography variant='body1'>{t('githubDesc')}</Typography>
						</Box>
					</Box>
				</Paper>

				<Paper elevation={3} className={classes.card}>
					<Box display='flex' flexDirection='row'>
						<IconButton
							target='_blank'
							href='https://play.google.com/store/apps/developer?id=Venturh&hl=en_US'
						>
							<GooglePlay className={classes.icons} />
						</IconButton>
						<Box className={classes.cardText}>
							<Typography variant='h6'>Google Play</Typography>
							<Typography variant='body1'>{t('playstoreDesc')}</Typography>
						</Box>
					</Box>
				</Paper>

				<Paper elevation={3} className={classes.card}>
					<Box display='flex' flexDirection='row'>
						<IconButton>
							<Linkedin className={classes.icons} />
						</IconButton>
						<Box className={classes.cardText}>
							<Typography variant='h6'>LinkedIn</Typography>
							<Typography variant='body1'>{t('linkedinDesc')}</Typography>
						</Box>
					</Box>
				</Paper>
			</Box>
		</Box>
	)
}
