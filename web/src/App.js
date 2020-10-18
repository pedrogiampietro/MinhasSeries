import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Generos from './pages/Generos'
import NovoGenero from './pages/Generos/NovoGenero'
import EditarGenero from './pages/Generos/EditarGenero'

import Series from './pages/Series'
import NovaSerie from './pages/Series/NovaSerie'
import InfoSerie from './pages/Series/InfoSerie'

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/generos" exact component={Generos} />
					<Route path="/generos/novo" exact component={NovoGenero} />
					<Route path="/generos/:id" exact component={EditarGenero} />

					<Route path="/series" exact component={Series} />
					<Route path="/series/novo" exact component={NovaSerie} />
					<Route path="/series/:id" exact component={InfoSerie} />

				</Switch>
			</>
		</BrowserRouter>
	)
}

export default App
