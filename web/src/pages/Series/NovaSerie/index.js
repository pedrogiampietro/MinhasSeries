import React from 'react'
import api from '../../../api'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
	const [name, setName] = React.useState('')
	const [success, setSuccess] = React.useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		api
			.post('/series', {
				name,
			})
			.then((response) => {
				setSuccess(true)
			})
	}

	if (success) {
		return <Redirect to="/series" />
	}

	return (
		<div className="container">
			<h1>Nova Série</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Nome</label>
					<input
						type="name"
						className="form-control"
						id="name"
						placeholder="Nome da Série"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-warning">
					Salvar
				</button>
			</form>
		</div>
	)
}

export default NovaSerie
