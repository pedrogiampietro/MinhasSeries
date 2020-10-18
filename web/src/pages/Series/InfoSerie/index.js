import React from 'react'
import api from '../../../api'
import { Redirect } from 'react-router-dom'
import { Badge } from 'reactstrap'

const InfoSerie = ({ match }) => {
	const [form, setForm] = React.useState({})
	const [success, setSuccess] = React.useState(false)
	const [mode, setMode] = React.useState('INFO')
	const [data, setData] = React.useState({})
	const [genres, setGenres] = React.useState([])

	React.useEffect(() => {
		api.get(`/series/${match.params.id}`).then((response) => {
			setData(response.data)
			setForm(response.data)
		})

		api.get('genres').then((response) => {
			setGenres(response.data.data)
		})
	}, [match.params.id])

	// custom header
	const masterHeader = {
		height: '50vh',
		minHeight: '500px',
		backgroundImage: `url('${data.background}')`,
		backgroundSize: 'cover',
		backgroumdPosition: 'center',
		backgroundRepeat: 'no-repeat',
	}

	const onChange = (field) => (event) => {
		setForm({
			...form,
			[field]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		api
			.put(`/series/${match.params.id}`, form)
			.then((response) => {
				setSuccess(true)
			})
	}

	// if (success) {
	// 	return <Redirect to="/series" />
	// }

	return (
		<div>
			<header style={masterHeader}>
				<div className="h-100 " style={{ background: 'rgba(0,0,0,0.7)' }}>
					<div className="h-100 container">
						<div className="row h-100 align-items-center">
							<div className="col-3">
								<img
									className="img-fluid img-thumbnail"
									src={data.poster}
									alt={data.name}
								/>
							</div>
							<div className="col-8">
								<h1 className="font-weight-light text-white">{data.name}</h1>
								<div className="lead text-white">
									<Badge color="success">Teste</Badge>
									Gênero: {data.genre}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div>
				<button className="btn btn-warning" onClick={() => setMode('EDIT')}>
					Editar
				</button>
			</div>

			{mode === 'EDIT' && (
				<div className="container">
					<h1>Info Série</h1>
					<button className="btn btn-warning" onClick={() => setMode('INFO')}>
						Cancelar edição
					</button>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Nome</label>
							<input
								type="name"
								className="form-control"
								id="name"
								placeholder="Nome da Série"
								value={form.name}
								onChange={onChange('name')}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="name">Comentários</label>
							<textarea
								type="name"
								className="form-control"
								id="name"
								placeholder="Faça um comentário sobre essa série"
								value={form.comments}
								onChange={onChange('comments')}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="genero">Gêneros</label>
							<select
								className="custom-select mr-sm-2"
								onChange={onChange('genre_id')}
							>
								<option hidden>Escolha um...</option>
								{genres.map((genre) => (
									<option key={genre.id} value={genre.id} select={genre.id === form.genre}>{genre.name}</option>
								))}
							</select>
						</div>

						<button type="submit" className="btn btn-warning">
							Salvar
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default InfoSerie
