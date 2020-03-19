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

const useStyles = makeStyles((theme) => ({
	page: {
		height: '100vh'
	},
	projects: { display: 'flex', justifyContent: 'space-evenly' },
	projectList: {
		display: 'grid',
		gridTemplateColumns: ' repeat(auto-fit, minmax(300px, 0.5fr))',
		gap: '1rem 1rem',
		margin: theme.spacing(4),
		justifyContent: 'center'
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
				console.log(result.data.user.pinnedItems.edges)
			})
	}

	return (
		<Box id='projects' className={classes.page}>
			<Typography align='center' variant='h3'>
				{t('projects')}
			</Typography>
			<Box className={classes.projectList}>
				{projectData.map((data) => <Project key={data.node.id} {...data.node} />)}
			</Box>
		</Box>
	)
}
