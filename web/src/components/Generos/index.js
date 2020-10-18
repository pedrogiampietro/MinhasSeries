import React from 'react'
import api from '../../api'

const Generos = () => {
	const [data, setData] = React.useState([])

	React.useEffect(() => {
		api
			.get('/genres')
			.then((response) => {
				setData(response.data)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])

	return (
		<div>
			<h1>Generos</h1>
			<section>{JSON.stringify(data)}</section>
		</div>
	)
}

export default Generos
