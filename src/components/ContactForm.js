import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	TextField,
	Typography,
	Button,
	IconButton,
	Box,
	Paper,
	Snackbar,
	SnackbarContent
} from '@material-ui/core/'
import { useTranslation } from 'react-i18next'
import { GooglePlay, GithubCircle, Linkedin, Telegram } from 'mdi-material-ui'
import CloseIcon from '@material-ui/icons/Close'

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
		},
		snackbar: {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.primary
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

	const { t } = useTranslation()
	const [
		open,
		setOpen
	] = React.useState(false)

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	const handleSubmit = (e) => {
		const data = { 'form-name': 'contact', email, name, message }
		fetch('/', {
			method: 'POST',
			body: encode(data)
		})
			.then(
				() => setStatus('Die Nachricht wurde gesendet'),
				setEmail(''),
				setMessage(''),
				setName('')
			)
			.catch((error) => setStatus('Sorry'))
		setOpen(true)
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
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<SnackbarContent
						className={classes.snackbar}
						message={status}
						action={
							<IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
								<CloseIcon fontSize='small' />
							</IconButton>
						}
					/>
				</Snackbar>
			</form>
		</Box>
	)
}

export function ContactCard(props) {
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
			[theme.breakpoints.down('1150')]: {
				fontSize: 45
			},
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

	function FieldIcon({ name }) {
		switch (name) {
			case 'GithubCircle':
				return <GithubCircle className={classes.icons} />
			case 'GooglePlay':
				return <GooglePlay className={classes.icons} />
			case 'Linkedin':
				return <Linkedin className={classes.icons} />
			case 'Telegram':
				return <Telegram className={classes.icons} />

			default:
				return <GithubCircle className={classes.icons} />
		}
	}

	return (
		<Box>
			<Box mt={4}>
				{props.info.map((data) => (
					<Paper key={data.title} elevation={3} className={classes.card}>
						<Box display='flex' flexDirection='row'>
							<IconButton target='_blank' href={data.link}>
								<FieldIcon name={data.icon} />
							</IconButton>
							<Box className={classes.cardText}>
								<Typography variant='h6'>{data.title}</Typography>
								<Typography variant='body1'>{t(data.text)}</Typography>
							</Box>
						</Box>
					</Paper>
				))}
			</Box>
		</Box>
	)
}
