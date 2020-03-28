import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Bounce from 'react-reveal/Bounce'

export default function IntroSub(props) {
	const { t } = useTranslation()
	const [
		show,
		setShow
	] = useState(true)

	const [
		text,
		setText
	] = useState('student')

	useEffect(() => {
		const textPool = [
			'frontdev',
			'backdev',
			'student'
		]
		let i = 0
		const interval = setInterval(() => {
			setShow(false)
			if (i >= textPool.length) {
				i = 0
			}
			setShow(true)
			setText(() => textPool[i++])
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<Typography component={'span'} variant='h4' color='textSecondary'>
			<Bounce when={show}>{t(JSON.stringify(text).replace(/"/g, ''))}</Bounce>
		</Typography>
	)
}
