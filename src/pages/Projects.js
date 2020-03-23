import React, { useState, useEffect } from 'react'
import {
	Button,
	Box,
	Toolbar,
	Grid,
	AppBar,
	Typography,
	IconButton,
	Paper,
	Card,
	Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import ProjectData from '../constant/ProjectData'
import Project from '../components/Project'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '100%'
		}
	},
	projects: {
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(10)
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(5)
		}
	},
	projectList: {
		display: 'grid',

		gap: '1rem 1rem',
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns: ' auto auto auto',
			margin: theme.spacing(10)
		},

		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: ' auto auto',
			[theme.breakpoints.down('xs')]: {
				gridTemplateColumns: ' auto',
				margin: theme.spacing(3)
			}
		}
	}
}))

export default function Projects() {
	const classes = useStyles()
	const { i18n, t } = useTranslation()
	const token = {
		githubConvertedToken: 'MmI3ZTVjNmYzNTkxOTI2NjhlZThjMjYwODI5NTc4YzMxMjI0YTk3Yg==',
		githubUserName: 'Venturh'
	}

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
						authorization: `Bearer ${atob(token.githubConvertedToken)}`
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
			<Box className={classes.projects}>
				<Typography align='center' variant='h3'>
					{t('projects')}
				</Typography>
			</Box>
			<Fade left cascade>
				<Box className={classes.projectList}>
					{projectData.map((data) => <Project key={data.node.id} {...data.node} />)}
					{projectData.map((data) => <Project key={data.node.id} {...data.node} />)}
				</Box>
			</Fade>
		</Box>
	)
}
