import React from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

const Generos = () => {
	const [data, setData] = React.useState([])

	React.useEffect(() => {
		api
			.get('/genres')
			.then((response) => {
				setData(response.data.data)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])

	const deleteGenero = (id) => {
		api.delete(`/genres/${id}`).then((response) => {
			const newValues = data.filter((item) => item.id !== id)
			setData(newValues)
		})
	}

	return (
		<div className="container">
			<h1>Gêneros</h1>
			<Link to="/generos/novo" className="btn btn-warning mb-1">
				Novo Gênero
			</Link>

			{data.length === 0 ? (
				<div className="alert alert-warning" role="alert">
					você ainda não tem nenhum gênero criado.
				</div>
			) : (
				<table className="table table-dark">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{data.map((rows) => {
							return (
								<tr key={rows.id}>
									<th scope="row">{rows.id}</th>
									<td>{rows.name}</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => deleteGenero(rows.id)}
										>
											Remover
										</button>
										<Link
											className="btn btn-warning ml-2"
											to={`/generos/${rows.id}`}
										>
											Editar
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Generos
