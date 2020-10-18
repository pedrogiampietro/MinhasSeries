import React from 'react'
import api from '../../../api'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
	const [name, setName] = React.useState('')
	const [success, setSuccess] = React.useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		api
			.post('/genres', {
				name,
			})
			.then((response) => {
				setSuccess(true)
			})
	}

	if (success) {
		return <Redirect to="/generos" />
	}

	return (
		<div className="container">
			<h1>Novo Gênero</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Nome</label>
					<input
						type="name"
						className="form-control"
						id="name"
						placeholder="Nome do Gênero"
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

export default NovoGenero
