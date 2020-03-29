import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import Project from '../components/Project'
import Fade from 'react-reveal/Fade'
import rocket_dark from '../assets/rocket_dark.svg'

const useStyles = makeStyles((theme) => ({
	page: {
		// backgroundImage: `url(${testbg})`,
		// backgroundRepeat: 'none',
		// backgroundSize: 'cover',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),

		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3),
			height: '100%'
		}
	},
	title: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(10)
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5)
		}
	},
	projectList: {
		display: 'grid',
		gap: '1rem 1rem',
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: ' auto auto auto'
		},
		[theme.breakpoints.down('lg')]: {
			gridTemplateColumns: ' auto auto',
			[theme.breakpoints.down('sm')]: {
				gridTemplateColumns: ' auto'
			}
		}
	},
	imageWrap: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		height: '80vh',
		[theme.breakpoints.down('md')]: { display: 'none' }
	},
	projectImg: {
		height: '100%',
		[theme.breakpoints.down('lg')]: {
			height: '80%'
		}
	},
	titleUnder: {
		width: '10%',
		height: 10,
		borderRadius: 25,
		backgroundColor: theme.palette.secondary.main,
		margingTop: theme.spacing(2)
	}
}))

export default function Projects() {
	const classes = useStyles()
	const { t } = useTranslation()

	const [
		projectData,
		setProjectData
	] = useState([])

	useEffect(() => {
		getRepoData()
	}, [])

	function getRepoData() {
		const client = new ApolloClient({
			uri: 'https://api.github.com/graphql',
			request: (operation) => {
				operation.setContext({
					headers: {
						authorization: `Bearer ${atob(
							'MmI3ZTVjNmYzNTkxOTI2NjhlZThjMjYwODI5NTc4YzMxMjI0YTk3Yg=='
						)}`
					}
				})
			}
		})

		client
			.query({
				query: gql`
					{
						user(login: "Venturh") {
							pinnedItems(first: 5, types: [REPOSITORY]) {
								edges {
									node {
										... on Repository {
											url
											id
											nameWithOwner
											homepageUrl
											description
											primaryLanguage {
												color
												name
											}
										}
									}
								}
							}
						}
					}
				`
			})
			.then((result) => {
				setProjectData(result.data.user.pinnedItems.edges)
			})
	}

	return (
		<Box id='projects' className={classes.page}>
			<Container className={classes.title}>
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
					<Typography variant='h3'>{t('projects')}</Typography>
					<Fade left>
						<div className={classes.titleUnder} />
					</Fade>
				</Box>
			</Container>
			<Box display='flex'>
				<Box className={classes.imageWrap}>
					<Fade up cascade>
						<img className={classes.projectImg} src={rocket_dark} alt='img' />
					</Fade>
				</Box>

				<Box flex={2} alignSelf='center'>
					<Fade right>
						<Box className={classes.projectList}>
							{projectData.map((data) => <Project key={data.node.id} {...data.node} />)}
							{projectData.map((data) => <Project key={data.node.id} {...data.node} />)}
						</Box>
						<Box mt={2}>
							<Button
								href='https://github.com/Venturh'
								target='_blank'
								variant='contained'
								color='primary'
							>
								Show more
							</Button>
						</Box>
					</Fade>
				</Box>
			</Box>
		</Box>
	)
}
